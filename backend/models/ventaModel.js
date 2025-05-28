import { db } from '../config/db.js';

export const registrarVenta = (venta, Callback) => {
    const { id_cliente, id_producto, cantidad} = venta;
    db.query('select precio, stock from productos where id = ?', [id_producto], (err,results) => {
        if(err) return Callback(err);
        if(results.length === 0){
            return Callback (new Error('Producto no encontrado'));
        }
        const { precio, stock } = results[0];
        if (cantidad > stock) {
           return Callback(new Error('Stock insuficiente'));
        }
        const total = precio * cantidad;
        db.query(
            'insert into ventas(id_cliente, id_producto, cantidad, precio_unitario, total) values (?,?,?,?,?)',
            [id_cliente, id_producto, cantidad, precio, total],
            (err, results) => {
                if (err) return Callback(err);

                db.query('update productos set stock = stock - ? where id = ?', [cantidad, id_producto], (err2) =>{
                    if(err2) return Callback(err2);
                    Callback(null, results);
                });
            }
        );
    });
};

export const obtenerVentas = (Callback) =>{
    db.query(`
        select v.id, c.nombre as cliente, p.nombre_prod as producto,
        v.cantidad, v.precio_unitario, v.total, v.fecha
        from ventas v
        join clientes c on  v.id_cliente = c.id
        join productos p on v.id_producto = p.id
        order by v.fecha desc`,
(err, results) =>{
    if (err) return Callback(err);
    Callback(null, results);
    });
};
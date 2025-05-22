import { getProductos, addProducto } from '../models/productoModel.js';

export const obtenerProductos = (req, res) => {
    getProductos ((err, resultados_prod) =>{
        if (err) return res.status(500).json({error: err.message });
        res.json(resultados_prod);
    });
};

export const crearProducto = (req, res) =>{
    const producto = req.body;
    addProducto(producto, (err, resultado_prod) => {
        if (err) return res.status(500).json({ error: err.message});
        res.json({ mensaje: 'Producto agregado', id: resultado_prod.insertId});
    });
};
import { db } from '../config/db.js';

export const getProductos = (Callback) => {
    db.query('select * from productos', Callback);
};

export const addProducto = (producto, Callback) =>{
    db.query('insert into productos set ?', producto, Callback);
};
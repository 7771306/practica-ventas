import { db } from '../config/db.js';

export const getClientes = (Callback) => {
    db.query('select * from clientes', Callback);
};

export const addCliente = (cliente, Callback) =>{
    db.query('insert into clientes set ?', cliente, Callback);
};
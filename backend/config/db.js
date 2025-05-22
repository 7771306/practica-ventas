import mysql, { createConnection } from 'mysql2';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'A159753',
    database: 'clientes_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('conectado a la base de datos MYSQL')
})
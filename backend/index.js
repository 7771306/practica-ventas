import cors from 'cors';
import express from 'express';
import clienteRoutes from './routes/clienteRoutes.js';
import productoRoutes from './routes/productoRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('../frontend'));

app.use('/api/clientes', clienteRoutes);
app.use('/api/productos', productoRoutes);

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});
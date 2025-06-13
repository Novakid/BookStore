import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import bookRoutes from './routes/bookRoutes.js';
import clientRouter from './routes/clientRoutes.js';
import authorRouter from './routes/authorRoutes.js';

const app = express();

const whitelist = [
    'http://localhost',
    'http://ejemplo.com' //Ejemplo de un dominio existente
];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new error);
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/client', clientRouter);
app.use('/api/author', authorRouter);

app.get('/', (req, res) => {
    res.send('Entro a la API de prueba')
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salio mal' })
});

export default app;
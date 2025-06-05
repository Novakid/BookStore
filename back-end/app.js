import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

const paramCors = {
    origin: 'localhost:3000',
    methods: ['GET', 'POST', 'PUT'],
};

app.use(cors(paramCors));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Entro a la API de prueba')
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salio mal' })
});

export default app;
import mysql from 'mysql2/promise';
import 'dotenv/config';

const bdconexion = {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const pool = mysql.createPool(bdconexion);

export default pool;
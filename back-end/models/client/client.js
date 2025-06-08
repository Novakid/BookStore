import pool from '../../config/database.js';

const client = {
    getAll: async () => {
        const [rows] = await pool.query('SELECT * FROM cliente');
        return rows;
    },
    create: async (Nombre, direccion, telefono, email) => {
        const [result] = await pool.query(
            'INSERT INTO cliente (Nombre, direccion, telefono, email) VALUES (?,?,?,?)',
            [Nombre, direccion, telefono, email]
        );
        return { id: result.insertId, Nombre, direccion, telefono, email };
    },
};

export default client;
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
    edit: async (id, Nombre, direccion, telefono, email) => {
        const [result] = await pool.query(
            'UPDATE cliente SET Nombre = ?, direccion = ?, telefono = ?, email = ?',
            [id, Nombre, direccion, telefono, email]
        );
        return result.affectedRows > 0;
    },
    delete: async (id) => {
        const [result] = await pool.query(
            'DELETE FROM cliente WHERE id = ?',
            [id]
        );
        return result.affectedRows > 0;
    },
};

export default client;
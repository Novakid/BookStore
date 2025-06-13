import pool from "../../config/database.js";

const author = {
    getAll: async () => {
        const [rows] = await pool.query('SELECT * FROM autor');
        return rows
    },
    create: async (Nombre, Biografia) => {
        const [result] = await pool.query(
            'INSERT INTO autor (Nombre, Biografia) VALUES (?,?)',
            [Nombre, Biografia]
        );
        return { id: result.insertId, Nombre, Biografia };
    },
    edit: async (id, Nombre, Biografia) => {
        const [result] = await pool.query(
            'UPDATE autor SET Nombre = ?, Biografia = ? WHERE id = ?',
            [id, Nombre, Biografia]
        );
        return result.affectedRows > 0;
    },
    delete: async (id) => {
        const [result] = await pool.query(
            'DELETE FROM autor WHERE id = ?',
            [id]
        );
        return result.affectedRows > 0;
    },
};

export default author;
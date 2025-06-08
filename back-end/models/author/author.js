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
};

export default author;
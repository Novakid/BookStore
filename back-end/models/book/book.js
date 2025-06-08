import pool from '../../config/database.js';

const book = {
    getAll: async () => {
        const [rows] = await pool.query('SELECT * FROM libro');
        return rows;
    },
    create: async (Titulo, Autor_id, ISBN, Fecha_publicacion, Precio) => {
        const [result] = await pool.query(
            'INSERT INTO libro (Titulo, Autor_id, ISBN, Fecha_publicacion, Precio) VALUES (?,?,?,?,?)',
            [Titulo, Autor_id, ISBN, Fecha_publicacion, Precio]
        );
        return { id: result.insertId, Titulo, Autor_id, ISBN, Fecha_publicacion, Precio};
    },
};

export default book;
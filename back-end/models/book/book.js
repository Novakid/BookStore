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
    edit: async (id, Titulo, Autor_id, ISBN, Fecha_publicacion, Precio) => {
        const [result] = await pool.query(
            'UPDATE libro SET Titulo = ?, Autor_id = ?, ISBN = ?, Fecha_publicacion = ?, Precio = ? WHERE id = ?',
            [id, Titulo, Autor_id, ISBN, Fecha_publicacion, Precio]
        );
        return result.affectedRow > 0;
    },
    delete: async (id) => {
        const [result] = await pool.query(
            'DELETE FROM libro WHERE id = ?',
            [id]
        );
        return result.affectedRows > 0;
    },
};

export default book;
import book from '../models/book/book.js';

export const getAllBooks = async (req, resp) => {
    try {
        const books = await book.getAll();
        resp.json(books);
    } catch (error) {
        resp.status(500).json({ error: 'Error al obtener'});
    }
};

export const createBook = async (req, resp) => {
    try {
        console.log(req.body);
        const { Titulo, Autor_id, ISBN, Fecha_publicacion, Precio } = req.body;
        const newBook = await book.create(Titulo, Autor_id, ISBN, Fecha_publicacion, Precio);
        resp.status(200).json(newBook);
    } catch (error) {
        console.log(error)
        resp.status(500).json({ error: 'Error al crear'});
    }
};

export const updateBook = async (req, resp) => {
    try {
        console.log(req.body);
        const { id, Titulo, Autor_id, ISBN, Fecha_publicacion, Precio } = req.body;
        const isUpdate = await book.edit(id, Titulo, Autor_id, ISBN, Fecha_publicacion, Precio);

        if (isUpdate) {
            resp.status(200).json({ success: true, message: 'Libro Actualizado' });
        } else {
            resp.status(500).json({ error: 'Error al actualizar'});
        }
    } catch (error) {
        console.log(error)
        resp.status(500).json({ error: 'Error al editar'});
    }
};

export const deleteBook = async (req, resp) => {
    try {
        console.log(req.body);
        const { id } = req.body;
        const isDelete = await book.delete(id);

        if (isDelete) {
            resp.status(200).json({ success: true, message: 'Libro Eliminado' });
        } else {
            resp.status(500).json({ error: 'No se pudo borrar el libro' });
        }
    } catch (error) {
        console.log(error)
        resp.status(500).json({ error: 'Error en el proceso' })
    }
};
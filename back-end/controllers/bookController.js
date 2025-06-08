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
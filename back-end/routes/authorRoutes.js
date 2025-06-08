import author from "../models/author/author.js";

export const getAllAuthor = async (req, resp) => {
    try {
        const authors = await author.getAll();
        resp.json(authors);
    } catch (error) {
        resp.status(500).json({ error: 'Error al obtener' });
    }
};

export const createAuthor = async (req, resp) => {
    try {
        console.log(req.body);
        const { Nombre, Biografia } = req.body;
        const newAuthor = await author.create(Nombre, Biografia);
        resp.status(200).json(newAuthor);
    } catch (error) {
        console.log(error)
        resp.status(500).json({ error: 'Error al crear' })
    }
};
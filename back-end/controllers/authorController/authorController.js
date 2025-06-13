import author from '../../models/author/author.js'

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

export const updateAuthor = async (req, resp) => {
    try {
        console.log(req.body);
        const { id, Nombre, Biografia } = req.body;
        const isUpdate = await author.edit(id, Nombre, Biografia);

        if (isUpdate) {
            resp.status(200).json({ success: true, message: 'Autor actualizado' });
        } else {
            resp.status(500).json({ error: 'Error al actualizar' });
        }
    } catch (error) {
        console.log(error)
        resp.status(500).json({ error: 'Error en la operación' });
    }
};

export const deleteAuthor = async (req, resp) => {
    try {
        console.log(req.body);
        const { id } = req.body;
        const isDelete = await author.delete(id);

        if (isDelete) {
            resp.status(200).json({ success: true, message: 'Autor eliminado' });
        } else {
            resp.status(500).json({ error: 'Error al borrar el autor' });
        }
    } catch (error) {
        console.log(error)
        resp.status(500).json({ error: 'Error en la operación' });
    }
};
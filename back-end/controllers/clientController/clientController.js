import client from "../../models/client/client.js";

export const getAllClient = async (req, resp) => {
    try {
        const clients = await client.getAll();
        resp.json(clients);
    } catch (error) {
        console.log(error)
        resp.status(500).json({ error: 'Error al obtener' });
    }
};

export const createClient = async (req, resp) => {
    try {
        console.log(req.body);
        const { Nombre, direccion, telefono, email } = req.body;
        const newClient = await client.create(Nombre, direccion, telefono, email);
        resp.status(200).json(newClient);
    } catch (error) {
        console.log(error)
        resp.status(500).json({ error: 'Error al crear' });
    }
};

export const updateClient = async (req, resp) => {
    try {
        console.log(req.body);
        const { id, Nombre, direccion, telefono, email } = req.body;
        const isUpdate = await client.edit(id, Nombre, direccion, telefono, email);
        if (isUpdate) {
            resp.status(200).json({ success: true, message: 'Cliente actualizado' });
        } else {
            resp.status(500).json({ error: 'Error al Editar' });
        }
    } catch (error) {
        console.log(error)
        resp.status(500).json({ error: 'Error al ingresar' });
    }
};

export const deleteClient = async (req, resp) => {
    try {
        console.log(req.body);
        const { id } = req.body;
        const isDelete = await client.delete(id);

        if (isDelete) {
            resp.status(200).json({ success: true, message: 'Usuario Eliminado' });
        } else {
            resp.status(500).json({ error: 'Error al borrar' });
        }
    } catch (error) {
        console.log(error)
        resp.status(500).json({ error: 'Error al ingresar' });
    }
};
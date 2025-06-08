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
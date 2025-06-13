import pool from '../../config/database.js';
import { generateToken } from '../../utils/jwt.js';

export const login = async (req, resp) => {
    try {
        const { email, telefono } = req.body;

        const [user] = await pool.query(
            'SELECT c.id, p.permisos FROM cliente c JOIN permisos p ON c.id = p.id_cliente WHERE c.email = ? AND c.telefono = ?',
            [email, telefono]
        );
        if (!user) {
            return resp.status(401).json({ error: 'Error en las credenciales' });
        }
        
        const token = generateToken({
            id: user.id,
            permisos: user.permisos
        });
        resp.json({
            token,
            permisos: user.permisos
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({ error: 'Error en el servidor' });
    }
};
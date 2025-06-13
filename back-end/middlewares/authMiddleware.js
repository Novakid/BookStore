import { verifyToken } from '../utils/jwt.js';

export const authenticate = (req, resp, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return resp.status(401).json({ error: 'Token no proporcionado' });
        }
        
        const decode = verifyToken(token);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error)
        resp.status(401).json({ error: 'Token invalido', details: error.message });
    }
};
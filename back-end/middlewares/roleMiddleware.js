export const checkRole = (requiredPermission) => {
    return (req, resp, next) => {
        const usePermission = req.user?.permisos;

        if (requiredPermission === 'admin' && usePermission !== 'admin') {
            return resp.status(403).json({ error: 'Acceso denegado' });
        }
        if (requiredPermission === 'cliente' && req.method !== 'GET') {
            return resp.status(403).json({ error: 'Cliente solo puede acceder al GET' });
        }
        next();
    };
};
import app from './app.js';
import pool from './config/database.js';

const PORT = process.env.PORT;

(async () => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    console.log('Conexión a MySQL exitosa:', rows);

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar a MySQL:', error);
    process.exit(1);
  }
})();
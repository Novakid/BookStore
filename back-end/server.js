import app from './app.js';

const PORT = process.env.PORT;

(async () => {
  try {
    console.log('Conexión a MySQL exitosa:', rows);

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar a MySQL:', error);
    process.exit(1);
  }
})();
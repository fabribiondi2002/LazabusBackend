import express from 'express';

const app = express();
const PORT = 3000;

// Middleware para parsear JSON (si vas a recibir datos en el body)
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, Express está funcionando! 🚀');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

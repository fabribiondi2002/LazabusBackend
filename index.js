import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import { Parada, Ruta, RutaParada, Viaje } from './models/associations.js';

dotenv.config();

const app = express();
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => res.send('🚍 API Lazabus funcionando correctamente'));

const PORT = process.env.PORT || 3000;

// Conexión y sincronización
try {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });
 
  app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
} catch (error) {
  console.error('Error al conectar con la base de datos:', error);
}

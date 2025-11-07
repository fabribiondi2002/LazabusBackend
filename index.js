import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import { Parada, Ruta, RutaParada, Viaje } from './models/associations.js';
import routes from './routes/index.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', routes);

const PORT = process.env.PORT || 3000;

// Conexión y sincronización
try {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });
 
  app.listen(PORT, "0.0.0.0",() => console.log(`Servidor corriendo en http://localhost:${PORT}`));
} catch (error) {
  console.error('Error al conectar con la base de datos:', error);
}

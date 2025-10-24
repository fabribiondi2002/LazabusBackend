import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Ruta extends Model {}

Ruta.init({
  id_ruta: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.STRING, allowNull: true }
}, {
  sequelize,
  modelName: 'Ruta',
  tableName: 'rutas',
  timestamps: false
});

export default Ruta;

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Parada extends Model {}

Parada.init({
  id_parada: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: { type: DataTypes.STRING, allowNull: false },
  lon: { type: DataTypes.DOUBLE, allowNull: false },
  lat: { type: DataTypes.DOUBLE, allowNull: false }
}, {
  sequelize,
  modelName: 'Parada',
  tableName: 'paradas',
  timestamps: false
});

export default Parada;

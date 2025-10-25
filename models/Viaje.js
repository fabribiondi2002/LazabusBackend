import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Viaje extends Model {}

Viaje.init({
  id_viaje: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  id_ruta: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: { model: 'rutas', key: 'id_ruta' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  estado: {
    type: DataTypes.ENUM('en_curso', 'finalizado', 'cancelado'),
    allowNull: false,
    defaultValue: 'en_curso'
  },
  origen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  destino: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Viaje',
  tableName: 'viajes', // plural, convención
  timestamps: false
});

export default Viaje;

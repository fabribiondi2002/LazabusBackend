import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class RutaParada extends Model {}

RutaParada.init({
  id_ruta: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    references: { model: 'rutas', key: 'id_ruta' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  id_parada: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    references: { model: 'paradas', key: 'id_parada' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  orden: { type: DataTypes.BIGINT, allowNull: false }
}, {
  sequelize,
  modelName: 'RutaParada',
  tableName: 'ruta_paradas',
  timestamps: false
});


export default RutaParada;

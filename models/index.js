import Parada from './Parada.js';
import Ruta from './Ruta.js';
import RutaParada from './RutaParada.js';
import Viaje from './Viaje.js';

// Relación muchos-a-muchos
Ruta.belongsToMany(Parada, {
  through: RutaParada,
  foreignKey: 'id_ruta',
  otherKey: 'id_parada',
  as: 'paradas'
});

Parada.belongsToMany(Ruta, {
  through: RutaParada,
  foreignKey: 'id_parada',
  otherKey: 'id_ruta',
  as: 'rutas'
});
Viaje.belongsTo(Ruta, { foreignKey: 'id_ruta', as: 'ruta' });
Ruta.hasMany(Viaje, { foreignKey: 'id_ruta', as: 'viajes' });

export {
  Parada,
  Ruta,
  RutaParada,
  Viaje
};

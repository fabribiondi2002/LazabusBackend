import Ruta from "../models/Ruta.js";
import Parada from "../models/Parada.js";
import RutaParada from '../models/RutaParada.js';
import { Sequelize } from "sequelize";

const obtenerRutasService = async () => {
  try {
    const rutas = await Ruta.findAll({
      include: [
        {
          model: Parada,
          as: 'paradas',
          through: { attributes: ['orden'] }
        }
      ]
    });
    return rutas;
  } catch (error) {
    throw new Error('Error al obtener las rutas');
  }
};

const agregarRutaService = async (rutaData) => {
  const existeNombre = await Ruta.findOne({ where: { nombre: rutaData.nombre } });
  if (existeNombre) {
    throw new Error('Ya existe una ruta con ese nombre');
  }
  const nuevaRuta = await Ruta.create(rutaData);
  return nuevaRuta;
};


const asignarParadasARutaService = async (idRuta, paradasIdsOrdenadas) => {
  try {
    const ruta = await Ruta.findByPk(idRuta);
    if (!ruta) throw new Error('Ruta no encontrada');

    const ultimaParada = await RutaParada.findOne({
      where: { id_ruta: idRuta },
      order: [['orden', 'DESC']]
    });
    let ordenBase = ultimaParada ? ultimaParada.orden : 0;

    for (let i = 0; i < paradasIdsOrdenadas.length; i++) {
      const idParada = paradasIdsOrdenadas[i];

      const parada = await Parada.findByPk(idParada);
      if (!parada) throw new Error(`Parada con id ${idParada} no encontrada`);

      await RutaParada.create({
        id_ruta: idRuta,
        id_parada: idParada,
        orden: ordenBase + i + 1
      });
    }

    const rutaConParadas = await Ruta.findByPk(idRuta, {
      include: {
        model: Parada,
        as: 'paradas',
        through: { attributes: ['orden'] }
      },
      order: [[Sequelize.col('paradas.RutaParada.orden'), 'ASC']]
    });

    return rutaConParadas;

  } catch (error) {
    throw new Error(`Error al asignar paradas a la ruta: ${error.message}`);
  }
};

const eliminarRutaService = async (idRuta) => {
  try {
    const ruta = await Ruta.findByPk(idRuta);
    if (!ruta) {
      throw new Error('Ruta no encontrada');
    }
    await RutaParada.destroy({ where: { id_ruta: idRuta } });
    await ruta.destroy();
    return;
  } catch (error) {
    throw new Error('Error al eliminar la ruta: ' + error.message);
  }
}
const eliminarRutaParadasService = async (idRuta) => {
  try {
    await RutaParada.destroy({ where: { id_ruta: idRuta } });
  } catch (error) {
    throw new Error('Error al eliminar las paradas de la ruta: ' + error.message);
  }
};

export default {
  obtenerRutasService,
  agregarRutaService,
  asignarParadasARutaService,
  eliminarRutaService,
  eliminarRutaParadasService
};


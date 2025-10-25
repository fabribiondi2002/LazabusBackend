import Parada from '../models/Parada.js';

const obtenerParadasService = async () => {
  return await Parada.findAll();
};

const agregarParadaService = async (data) => {
  if (!data.nombre || !data.lat || !data.lon) {
    throw new Error('Faltan datos obligatorios: nombre, lat o lon');
  }

  const paradaExistente = await Parada.findOne({ where: { nombre: data.nombre } });
  if (paradaExistente) {
    throw new Error(`Ya existe una parada con el nombre "${data.nombre}"`);
  }

  return await Parada.create(data);
};

const obtenerParadaPorNombreService = async (nombre) => {
  const parada = await Parada.findOne({ where: { nombre } });
  if (!parada) {
    const error = new Error(`No se encontró ninguna parada con el nombre "${nombre}"`);
    error.status = 404;
    throw error;
  }
  return parada;
};

const obtenerParadaPorIdService = async (idParada) => {
  const parada = await Parada.findByPk(idParada);
  if (!parada) {
    const error = new Error(`No se encontró la parada con ID ${idParada}`);
    error.status = 404;
    throw error;
  }
  return parada;
};

const obtenerParadaPorCoordenadasService = async ({ lon, lat }) => {
  const parada = await Parada.findOne({ where: { lon, lat } });
  if (!parada) {
    const error = new Error(`No se encontró ninguna parada en las coordenadas (${lon}, ${lat})`);
    error.status = 404;
    throw error;
  }
  return parada;
};

const eliminarParadaService = async (idParada) => {
  const parada = await Parada.findByPk(idParada);
  if (!parada) {
    const error = new Error(`No se puede eliminar: la parada con ID ${idParada} no existe`);
    error.status = 404;
    throw error;
  }
  await parada.destroy();
};

export default {
  obtenerParadasService,
  agregarParadaService,
  obtenerParadaPorNombreService,
  obtenerParadaPorIdService,
  obtenerParadaPorCoordenadasService,
  eliminarParadaService
};

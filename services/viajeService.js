import Viaje from "../models/Viaje.js";

const obtenerViajesService = async () => {
  return await Viaje.findAll();
};

const agregarViajeService = async (data) => {
  if (!data.origen || !data.destino || !data.fecha) {
    throw new Error('Faltan datos obligatorios: origen, destino o fecha');
  }

  return await Viaje.create(data);
};

const obtenerViajePorIdService = async (idViaje) => {
  const viaje = await Viaje.findByPk(idViaje);
  if (!viaje) {
    const error = new Error(`No se encontró el viaje con ID ${idViaje}`);
    error.status = 404;
    throw error;
  }
  return viaje;
};

const eliminarViajeService = async (idViaje) => {
  const viaje = await Viaje.findByPk(idViaje);
  if (!viaje) {
    const error = new Error(`No se puede eliminar: el viaje con ID ${idViaje} no existe`);
    error.status = 404;
    throw error;
  }
  await viaje.destroy();
};


export default {
  obtenerViajesService,
  agregarViajeService,
  obtenerViajePorIdService,
  eliminarViajeService
};

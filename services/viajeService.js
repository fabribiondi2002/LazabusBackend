import Viaje from "../models/Viaje.js";
import Ruta from "../models/Ruta.js";

const obtenerViajesService = async () => {
  return await Viaje.findAll();
};

const agregarViajeService = async (data) => {
  const ruta = await Ruta.findByPk(data.id_ruta);
  console.log(ruta);
  if (!ruta) {
    throw new Error(`No se puede crear el viaje: la ruta con ID ${data.id_ruta} no existe`);
  }

  if (!data.origen || !data.destino) {
    throw new Error('Faltan datos obligatorios: origen o destino');
  }

  const viaje = await ruta.createViaje({
    origen: data.origen,
    destino: data.destino,
    fecha: Date.now(),
    estado: data.estado ?? 'creado' 
  });

  return viaje;
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

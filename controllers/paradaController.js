import paradaService from '../services/paradaService.js';
export const obtenerParadas = async (req, res) => {
    try {
        const paradas = await paradaService.obtenerParadasService();
        res.json(paradas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const agregarParada = async (req, res) => {
    try {
        const nuevaParada = await paradaService.agregarParadaService(req.body);
        res.status(201).json(nuevaParada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const obtenerParadaPorNombre = async (req, res) => {
  const { nombre } = req.params;
  try {
    const parada = await paradaService.obtenerParadaPorNombreService(nombre);
    res.json(parada);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

export const obtenerParadaPorCoordenadas = async (req, res) => {
    const { lon, lat } = req.params;
    try {
        const parada = await paradaService.obtenerParadaPorCoordenadasService({ lon, lat });
        res.json(parada);
    } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
    }
};

export const eliminarParada = async (req, res) => {
    const { idParada } = req.params;
    try {
        await paradaService.eliminarParadaService(idParada);
        res.status(204).send();
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
};

export const obtenerParadaPorId = async (req, res) => {
    const { idParada } = req.params;
    try {
        const parada = await paradaService.obtenerParadaPorIdService(idParada);
        res.json(parada);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
};

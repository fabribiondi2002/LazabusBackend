import viajeService from "../services/viajeService.js";

export const obtenerViajes = async (req, res) => {
    try {
        const viajes = await viajeService.obtenerViajesService();
        res.json(viajes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const agregarViaje = async (req, res) => {
    try {
        const nuevoViaje = await viajeService.agregarViajeService(req.body);
        res.status(201).json(nuevoViaje);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const obtenerViajePorId = async (req, res) => {
    const { idViaje } = req.params;
    try {
        const viaje = await viajeService.obtenerViajePorIdService(idViaje);
        res.json(viaje);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
};

export const eliminarViaje = async (req, res) => {
    const { idViaje } = req.params;
    try {
        await viajeService.eliminarViajeService(idViaje);
        res.status(204).send();
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
};


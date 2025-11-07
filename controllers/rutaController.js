import rutaService from "../services/rutaService.js";
export const obtenerRutas = async (req, res) => {
    try {
        const rutas = await rutaService.obtenerRutasService();
        res.json(rutas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const agregarRuta = async (req, res) => {
    try {
        const nuevaRuta = await rutaService.agregarRutaService(req.body);
        res.status(201).json(nuevaRuta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const asignarParadasARuta = async (req, res) => {
    const { idRuta } = req.params;
    const { paradasIdsOrdenadas } = req.body;
    try {
        const rutaActualizada = await rutaService.asignarParadasARutaService(idRuta, paradasIdsOrdenadas);
        res.json(rutaActualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }  
};
export const eliminarRuta = async (req, res) => {
    const { idRuta } = req.params;
    try {
        await rutaService.eliminarRutaService(idRuta);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const eliminarRutaParadas = async (req, res) => {
    const { idRuta } = req.params;
    try {
        await rutaService.eliminarRutaParadasService(idRuta);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const calcularRutas = async (req, res) => {
    const { olat, olng, dlat, dlng } = req.query;

    try {
        const rutasCalculadas = await rutaService.calcularRutasService({ olat, olng, dlat, dlng });
        res.json(rutasCalculadas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const calcularRutaOptima = async (req, res) => {
    const { olat, olng, dlat, dlng } = req.query;

    try {
        const rutaOptima = await rutaService.calcularRutaOptimaService({ olat, olng, dlat, dlng });
        res.json(rutaOptima);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
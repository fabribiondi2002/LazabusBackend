import { Router } from 'express';
import * as rutaController from '../controllers/rutaController.js';
const router = Router();

router.get('/', rutaController.obtenerRutas);
router.post('/', rutaController.agregarRuta);
router.delete('/:idRuta', rutaController.eliminarRuta);
router.put('/:idRuta/asignar-paradas', rutaController.asignarParadasARuta);
router.delete('/:idRuta/paradas', rutaController.eliminarRutaParadas);
router.get('/calcular-rutas', rutaController.calcularRutas);
router.get('/calcular-ruta-optima', rutaController.calcularRutaOptima);

export default router;
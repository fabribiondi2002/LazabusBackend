import { Router } from 'express';
import * as rutaController from '../controllers/rutaController.js';
const router = Router();

router.get('/', rutaController.obtenerRutas);
router.post('/', rutaController.agregarRuta);
router.delete('/:idRuta', rutaController.eliminarRuta);
router.put('/:idRuta/asignar-paradas', rutaController.asignarParadasARuta);
router.delete('/:idRuta/paradas', rutaController.eliminarRutaParadas);

export default router;
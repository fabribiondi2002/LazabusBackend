import { Router } from 'express';
import * as viajeController from '../controllers/viajeController.js';
const router = Router();

router.get('/', viajeController.obtenerViajes);
router.post('/', viajeController.agregarViaje);
router.get('/:idViaje', viajeController.obtenerViajePorId);
router.delete('/:idViaje', viajeController.eliminarViaje);

export default router;

// routes/paradaRoutes.js
import { Router } from 'express';
import * as paradaController from '../controllers/paradaController.js';

const router = Router();

router.get('/', paradaController.obtenerParadas);
router.post('/', paradaController.agregarParada);
router.get('/nombre/:nombre', paradaController.obtenerParadaPorNombre);
router.get('/coordenadas/lon:lon&lat:lat', paradaController.obtenerParadaPorCoordenadas);
router.delete('/:idParada', paradaController.eliminarParada);
router.get('/:idParada', paradaController.obtenerParadaPorId);


export default router;
 
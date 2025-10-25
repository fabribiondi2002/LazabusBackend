import { Router } from 'express';
import paradaRoutes from './paradaRoutes.js';
import rutaRoutes from './rutaRoutes.js';
import viajeRoutes from './viajeRoutes.js';

const router = Router();

router.use('/paradas', paradaRoutes);
router.use('/rutas', rutaRoutes);
router.use('/viajes', viajeRoutes);

export default router;

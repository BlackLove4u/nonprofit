import { Router } from 'express';
import blogRoutes from './blog';
import podcastRoutes from './podcast';
import storeRoutes from './store';
import activitiesRoutes from './activities';
import gamesRoutes from './games';

const router = Router();

// API routes
router.use('/blog', blogRoutes);
router.use('/podcast', podcastRoutes);
router.use('/store', storeRoutes);
router.use('/activities', activitiesRoutes);
router.use('/games', gamesRoutes);

export default router;
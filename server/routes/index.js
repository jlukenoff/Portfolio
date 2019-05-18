import express from 'express';
import clientRouter from './client';
import STATIC_DIR from '../constants';

const router = express.Router();

router.use(express.static(STATIC_DIR));
router.use(clientRouter);

export default router;
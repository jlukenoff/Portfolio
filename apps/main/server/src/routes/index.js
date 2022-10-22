import express from 'express';
import clientRouter from './client';


const router = express.Router();

router.use(clientRouter);

export default router;
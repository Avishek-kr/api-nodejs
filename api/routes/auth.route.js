import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';
import { tipCalculator } from '../controllers/tip.controller.js';

const router = express.Router();

router.post('/user', signup);
router.post('/user/login', signin);
router.post('/tip/calculate', tipCalculator);

export default router
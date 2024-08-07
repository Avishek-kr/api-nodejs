import express from 'express';
import { getAllTips, tipCalculator } from '../controllers/tip.controller.js';

const router = express.Router();

router.post('/tip/calculate', tipCalculator);
router.get('/tip', getAllTips);

export default router;
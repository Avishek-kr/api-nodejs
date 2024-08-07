import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/user', signup);
router.post('/user/login', signin);

export default router
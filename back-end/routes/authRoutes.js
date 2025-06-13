import express from 'express';
import { login } from '../controllers/authController/authController.js';

const router = express.Router();

router.post('/login', login);

export default router;
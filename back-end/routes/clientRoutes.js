import express from 'express';
import { getAllClient, createClient } from '../controllers/clientController/clientController.js';

const router = express.Router();

router.get('/', getAllClient);
router.post('/', createClient);

export default router;
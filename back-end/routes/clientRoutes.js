import express from 'express';
import { getAllClient, createClient, updateClient, deleteClient } from '../controllers/clientController/clientController.js';

const router = express.Router();

router.get('/', getAllClient);
router.post('/', createClient);
router.put('/', updateClient);
router.delete('/', deleteClient);

export default router;
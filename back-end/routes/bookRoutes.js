import express from 'express';
import { getAllBooks, createBook, updateBook, deleteBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.post('/', createBook);
router.put('/', updateBook);
router.delete('/', deleteBook);

export default router;
import express from 'express';
import { getAllAuthor, createAuthor, updateAuthor, deleteAuthor } from '../controllers/authorController/authorController.js';

const router = express.Router();

router.get('/', getAllAuthor);
router.post('/', createAuthor);
router.put('/', updateAuthor);
router.delete('/', deleteAuthor);

export default router;
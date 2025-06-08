import express from 'express';
import { getAllAuthor, createAuthor } from '../../routes/authorRoutes.js';

const router = express.Router();

router.get('/', getAllAuthor);
router.post('/', createAuthor);
import express from 'express';
import {handleGenerateNewShortURL} from '../controllers/urlController.js';
const router = express.Router();

router.post('/', handleGenerateNewShortURL);

export default router;
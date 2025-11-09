import express from 'express';
import {handleGetAnalytics, handleGetShortId, handleGenerateNewShortURL} from '../controllers/urlController.js';
const router = express.Router();

router.post('/', handleGenerateNewShortURL);
router.get('/:shortId', handleGetShortId);
router.get('/analytics/:shortId', handleGetAnalytics);

export default router;
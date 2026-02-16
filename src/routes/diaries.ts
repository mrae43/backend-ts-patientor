import express from 'express';
import diaryService from '../services/diaryService';
import { NonSensitiveEntries } from '../types';

const router: express.Router = express.Router();

router.get('/', (_req, res: express.Response<NonSensitiveEntries[]>) => {
	res.send(diaryService.getNonSensitiveEntries());
});

router.post('/', (_req, res) => {
	res.send('Saving a diary!');
});

export default router;

import express from 'express';
import diaryService from '../services/diaryService';
import { NonSensitiveEntries } from '../types';

const router: express.Router = express.Router();

router.get('/:id', (req, res) => {
	const diary = diaryService.findById(Number(req.params.id));

	if (diary) {
		res.send(diary);
	} else {
		res.sendStatus(404);
	}
});

router.get('/', (_req, res: express.Response<NonSensitiveEntries[]>) => {
	res.send(diaryService.getNonSensitiveEntries());
});

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
router.post('/', (req, res) => {
	const { date, weather, visibility, comment } = req.body;
	const newDiaryEntry = diaryService.addDiary({
		date,
		weather,
		visibility,
		comment,
	});
	res.json(newDiaryEntry);
});

export default router;

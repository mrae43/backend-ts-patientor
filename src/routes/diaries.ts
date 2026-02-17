import express, { Request, Response, NextFunction, Router } from 'express';
import z from 'zod';
import diaryService from '../services/diaryService';
import { NewDiaryEntry, NonSensitiveEntries, DiaryEntry } from '../types';
import { NewEntrySchema } from '../utils/utilsDiary';

const router: Router = express.Router();

const newDiaryParser = (req: Request, _res: Response, next: NextFunction) => {
	try {
		NewEntrySchema.parse(req.body);
		next();
	} catch (error: unknown) {
		next(error);
	}
};

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

router.post(
	'/',
	newDiaryParser,
	(
		req: Request<unknown, unknown, NewDiaryEntry>,
		res: Response<DiaryEntry>,
	) => {
		const addedEntry = diaryService.addDiary(req.body);
		res.json(addedEntry);
	},
);

export default router;

import express, { Request, Response, NextFunction, Router } from 'express';
import z from 'zod';
import patientService from '../services/patientService';
import { PublicPatient, Patient, Entry } from '../types';
import { newPatientSchema, NewPatient, toNewEntry } from '../utils';

const router: Router = express.Router();

export const errorMiddleware = (
	error: unknown,
	_req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (error instanceof z.ZodError) {
		res.status(400).send({ error: error.issues });
	} else {
		next(error);
	}
};

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
	try {
		newPatientSchema.parse(req.body);
		next();
	} catch (error: unknown) {
		next(error);
	}
};

router.get('/', (_req, res: Response<PublicPatient[]>) => {
	res.send(patientService.getNonSensitivePatients());
});

router.get(
	'/:id',
	(req: Request<{ id: string }>, res: Response<Patient | null>) => {
		res.send(patientService.findPatientById(req.params.id));
	},
);

router.post(
	'/',
	newPatientParser,
	(req: Request<unknown, unknown, NewPatient>, res: Response<Patient>) => {
		const addedPatient = patientService.addPatient(req.body);
		res.json(addedPatient);
	},
);

router.post(
	'/:id/entries',
	(req: Request<{ id: string }>, res: Response<Entry | { error: string }>) => {
		try {
			const id = req.params.id;
			const newEntry = toNewEntry(req.body);
			const createdEntry = patientService.addNewEntryToPatient(id, newEntry);
			return res.status(201).json(createdEntry);
		} catch (error: unknown) {
			if (error instanceof z.ZodError) {
				return res.status(400).json({
					error: 'Validation failed',
				});
			}
			return res.status(400).json({
				error: (error as Error).message || 'Invalid data',
			});
		}
	},
);

router.use(errorMiddleware);

export default router;

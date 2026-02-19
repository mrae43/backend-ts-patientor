import express, { Request, Response, NextFunction, Router } from 'express';

import patientService from '../services/patientService';
import { NewPatient, NonSensitivePatients, Patient } from '../types';
import { NewPatientSchema } from '../utils';
import { errorMiddleware } from './diaries';

const router: Router = express.Router();

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
	try {
		NewPatientSchema.parse(req.body);
		next();
	} catch (error: unknown) {
		next(error);
	}
};

router.get('/', (_req, res: Response<NonSensitivePatients[]>) => {
	res.send(patientService.getNonSensitivePatientLogs());
});

router.post(
	'/',
	newPatientParser,
	(req: Request<unknown, unknown, NewPatient>, res: Response<Patient>) => {
		const addedPatient = patientService.addPatient(req.body);
		res.json(addedPatient);
	},
);

router.use(errorMiddleware);

export default router;

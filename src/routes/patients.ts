import express, { Request, Response, NextFunction, Router } from 'express';

import patientService from '../services/patientService';
import { NewPatientLog, NonSensitiveLogs, PatientsLog } from '../types';
import { NewPatientLogSchema } from '../utils';
import { errorMiddleware } from './diaries';

const router: Router = express.Router();

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
	try {
		NewPatientLogSchema.parse(req.body);
		next();
	} catch (error: unknown) {
		next(error);
	}
};

router.get('/', (_req, res: Response<NonSensitiveLogs[]>) => {
	res.send(patientService.getNonSensitivePatientLogs());
});

router.post(
	'/',
	newPatientParser,
	(
		req: Request<unknown, unknown, NewPatientLog>,
		res: Response<PatientsLog>,
	) => {
		const addedPatient = patientService.addPatient(req.body);
		res.json(addedPatient);
	},
);

router.use(errorMiddleware);

export default router;

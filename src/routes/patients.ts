import express from 'express';

import patientService from '../services/patientService';
import { NonSensitiveLogs } from '../types';
import toNewPatientLog from '../utils/utilsPatient';

const router: express.Router = express.Router();

router.get('/', (_req, res: express.Response<NonSensitiveLogs[]>) => {
	res.send(patientService.getNonSensitivePatientLogs());
});

router.post('/', (req, res) => {
	try {
		const newPatientLog = toNewPatientLog(req.body);
		const addedPatient = patientService.addPatient(newPatientLog);
		res.json(addedPatient);
	} catch (error) {
		let errorMessage = 'Something went wrong';
		if (error instanceof Error) {
			errorMessage += ' Error: ' + error.message;
		}
		res.status(404).send(errorMessage);
	}
});

export default router;

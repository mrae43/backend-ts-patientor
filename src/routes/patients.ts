import express from 'express';

import patientService from '../services/patientService';
import { NonSensitiveLogs } from '../types';

const router: express.Router = express.Router();

router.get('/', (_req, res: express.Response<NonSensitiveLogs[]>) => {
	res.send(patientService.getNonSensitivePatientLogs());
});

router.post('/', (_req, res) => {
	res.send('Saving a patient!');
});

export default router;

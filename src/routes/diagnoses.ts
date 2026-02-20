import express from 'express';
import diagnoseService from '../services/diagnoseService';
import { Diagnosis } from '../types';

const router: express.Router = express.Router();

router.get('/', (_req, res: express.Response<Diagnosis[]>) => {
	res.send(diagnoseService.getDiagnoses());
});

router.post('/', (_req, res) => {
	res.send('Saving a diagnoses!');
});

export default router;

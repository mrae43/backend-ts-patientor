import { PatientsLog } from '../types';

const toNewPatientLog = (object: unknown): PatientsLog => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	throw new Error('Incorrect data: some fields are missing');
};

export default toNewPatientLog;

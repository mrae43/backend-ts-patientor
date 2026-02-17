import { v1 as uuid } from 'uuid';
import patients from '../data/patients';
import { PatientsLog, NonSensitiveLogs, NewPatientLog } from '../types';

const getPatients = (): PatientsLog[] => {
	return patients;
};

const getNonSensitivePatientLogs = (): NonSensitiveLogs[] => {
	return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
		id,
		name,
		dateOfBirth,
		gender,
		occupation,
	}));
};

const addPatient = (log: NewPatientLog): PatientsLog => {
	const id = uuid();
	const addNewLog = {
		id: id,
		...log,
	};

	patients.push(addNewLog);

	return addNewLog;
};

export default {
	getPatients,
	addPatient,
	getNonSensitivePatientLogs,
};

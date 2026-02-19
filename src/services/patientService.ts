import { v1 as uuid } from 'uuid';
import patients from '../data/patients';
import { Patient, NonSensitivePatients, NewPatient } from '../types';

const getPatients = ():Patient[] => {
	return patients;
};

const getNonSensitivePatientLogs = (): NonSensitivePatients[] => {
	return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
		id,
		name,
		dateOfBirth,
		gender,
		occupation,
	}));
};

const addPatient = (log: NewPatient): Patient => {
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

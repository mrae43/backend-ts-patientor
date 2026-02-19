import { v1 as uuid } from 'uuid';
import patients from '../data/patients';
import { Patient, NonSensitivePatients, NewPatient } from '../types';

const getPatients = (): Patient[] => {
	return patients;
};

const getNonSensitivePatients = (): NonSensitivePatients[] => {
	return patients.map(
		({ id, name, dateOfBirth, gender, occupation, entries }) => ({
			id,
			name,
			dateOfBirth,
			gender,
			occupation,
			entries,
		}),
	);
};

const addPatient = (log: NewPatient): Patient => {
	const id = uuid();
	const addNewLog = {
		id: id,
		...log,
		entries: [],
	};

	patients.push(addNewLog);

	return addNewLog;
};

const findPatientById = (id: string): Patient | undefined => {
	const patient = patients.find((p) => p.id === id);
	return patient;
};

export default {
	getPatients,
	addPatient,
	getNonSensitivePatients,
	findPatientById,
};

import { v1 as uuid } from 'uuid';
import patients from '../data/patients';
import { Entry, Patient, PublicPatient } from '../types';
import { NewEntry, NewPatient } from '../utils';

const getPatients = (): Patient[] => {
	return patients;
};

const getNonSensitivePatients = (): PublicPatient[] => {
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

const addNewEntryToPatient = (patientId: string, entry: NewEntry): Entry => {
	const patient = patients.find((p) => p.id === patientId);
	if (!patient) {
		throw new Error('Patient not found!');
	}

	const newEntry = {
		id: uuid(),
		...entry,
	} as Entry;

	patient.entries.push(newEntry);

	return newEntry;
};

export default {
	getPatients,
	addPatient,
	getNonSensitivePatients,
	findPatientById,
	addNewEntryToPatient,
};

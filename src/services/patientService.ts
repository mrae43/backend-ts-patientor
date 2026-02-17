import patients from '../data/patients';
import { PatientsLog, NonSensitiveLogs } from '../types';

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

const addPatient = () => {
	return null;
};

export default {
	getPatients,
	addPatient,
	getNonSensitivePatientLogs,
};

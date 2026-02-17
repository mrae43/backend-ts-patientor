import { PatientsLog } from '../types';

const isString = (text: unknown): text is string => {
	return typeof text === 'string';
};

const parseName = (name: unknown): string => {
	if (!name || !isString(name)) {
		throw new Error('Incorrect or missing name');
	}

	return name;
};

const isDate = (date: string): boolean => {
	return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
	if (!date || !isString(date) || !isDate(date)) {
		throw new Error('Incorrect or missing date. ' + date);
	}
	return date;
};

const toNewPatientLog = (object: unknown): PatientsLog => {
	if (!object || typeof object !== 'object') {
		throw new Error('Incorrect or missing data');
	}

	if (
		'name' in object &&
		'dateOfBirth' in object &&
		'ssn' in object &&
		'gender' in object &&
		'occupation' in object
	) {
		const newEntryLog: PatientsLog = {
			name: parseName(object.name),
			dateOfBirth: parseDate(object.dateOfBirth),
		};

		return newEntryLog;
	}

	throw new Error('Incorrect data: some fields are missing');
};

export default toNewPatientLog;

import z from 'zod';
import {
	Gender,
	NewDiaryEntry,
	Visibility,
	Weather,
	NewPatientLog,
} from './types';

export const NewEntrySchema = z.object({
	weather: z.enum(Weather),
	visibility: z.enum(Visibility),
	date: z.iso.date(),
	comment: z.string(),
});

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
	return NewEntrySchema.parse(object);
};

export const NewPatientLogSchema = z.object({
	name: z.string(),
	dateOfBirth: z.iso.date(),
	ssn: z.string(),
	gender: z.enum(Gender),
	occupation: z.string(),
});

const toNewPatientLog = (object: unknown): NewPatientLog => {
	return NewPatientLogSchema.parse(object);
};

export default { toNewDiaryEntry, toNewPatientLog };

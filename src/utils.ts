import z from 'zod';
import { Gender, NewPatient, HealthCheckRating, NewEntry } from './types';

export const NewPatientSchema = z.object({
	name: z.string(),
	dateOfBirth: z.iso.date(),
	ssn: z.string(),
	gender: z.enum(Gender),
	occupation: z.string(),
});

const toNewPatientLog = (object: unknown): NewPatient => {
	return NewPatientSchema.parse(object);
};

export const addNewEntrySchema = z.discriminatedUnion('type', [
	z.object({
		type: z.literal('HealthCheck'),
		description: z.string(),
		date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
		specialist: z.string(),
		diagnosisCodes: z.array(z.string()).optional(),
		healthCheckRating: z.enum(HealthCheckRating),
	}),
	z.object({
		type: z.literal('Hospital'),
		description: z.string(),
		date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
		specialist: z.string(),
		diagnosisCodes: z.array(z.string()).optional(),
		discharge: z.object({
			date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
			criteria: z.string(),
		}),
	}),
	z.object({
		type: z.literal('OccupationalHealthcare'),
		description: z.string(),
		date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
		specialist: z.string(),
		diagnosisCodes: z.array(z.string()).optional(),
		employerName: z.string(),
		sickLeave: z
			.object({
				startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
				endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
			})
			.optional(),
	}),
]);

const toAddNewEntry = (object: unknown): NewEntry => {
	return addNewEntrySchema.parse(object);
};

export default { toNewPatientLog, toAddNewEntry };

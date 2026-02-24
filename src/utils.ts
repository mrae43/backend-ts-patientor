import { z } from 'zod';
import { Gender, HealthCheckRating, EntryType } from './types';

export const diagnoseSchema = z.object({
	code: z.string(),
	name: z.string(),
	latin: z.string().optional(),
});

export type DiagnoseSchema = z.infer<typeof diagnoseSchema>;

export const newPatientSchema = z.object({
	name: z.string().min(1),
	dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	ssn: z.string().min(1),
	gender: z.enum(Gender),
	occupation: z.string().min(1),
});

export type NewPatient = z.infer<typeof newPatientSchema>;

const baseEntrySchema = z.object({
	description: z.string(),
	date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	specialist: z.string(),
	diagnosisCodes: z.array(z.string()).optional(),
});

const healthCheckEntrySchema = baseEntrySchema.extend({
	type: z.literal(EntryType.HealthCheck),
	healthCheckRating: z.enum(HealthCheckRating),
});

export type HealthCheckEntrySchema = z.infer<typeof healthCheckEntrySchema>;

const hospitalEntrySchema = baseEntrySchema.extend({
	type: z.literal(EntryType.Hospital),
	discharge: z.object({
		date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
		criteria: z.string(),
	}),
});

export type HospitalEntrySchema = z.infer<typeof hospitalEntrySchema>;

const occupationalHealthcareEntrySchema = baseEntrySchema.extend({
	type: z.literal(EntryType.OccupationalHealthcare),
	employerName: z.string(),
	sickLeave: z
		.object({
			startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
			endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
		})
		.optional(),
});

export type OccupationalHealthcareEntrySchema = z.infer<
	typeof occupationalHealthcareEntrySchema
>;

export const newEntrySchema = z.discriminatedUnion('type', [
	healthCheckEntrySchema,
	hospitalEntrySchema,
	occupationalHealthcareEntrySchema,
]);

export type NewEntry = z.infer<typeof newEntrySchema>;

export const toNewPatient = (object: unknown): NewPatient => {
	return newPatientSchema.parse(object);
};

export const toNewEntry = (object: unknown): NewEntry => {
	return newEntrySchema.parse(object);
};

export default { toNewPatient, toNewEntry };

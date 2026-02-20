import { z } from 'zod';
import { NewEntrySchema, NewPatientSchema } from './utils';

export enum Weather {
	Sunny = 'sunny',
	Rainy = 'rainy',
	Cloudy = 'cloudy',
	Stormy = 'stormy',
	Windy = 'windy',
}

export enum Visibility {
	Great = 'great',
	Good = 'good',
	Ok = 'ok',
	Poor = 'poor',
}

export interface DiaryEntry extends NewDiaryEntry {
	id: number;
}

export type NonSensitiveEntries = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = z.infer<typeof NewEntrySchema>;

export interface Diagnosis {
	code: string;
	name: string;
	latin?: string;
}

export enum Gender {
	Male = 'male',
	Female = 'female',
	Other = 'other',
}

interface BaseEntry {
	id: string;
	description: string;
	date: string;
	specialist: string;
	diagnosisCodes?: Array<Diagnosis['code']>;
}

export enum HealthCheckRating {
	'Healthy' = 0,
	'LowRisk' = 1,
	'HighRisk' = 2,
	'CriticalRisk' = 3,
}

export interface HealthCheckEntry extends BaseEntry {
	type: 'HealthCheck';
	healthCheckRating: HealthCheckRating;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Entry {}

export interface Patient extends NewPatient {
	id: string;
	entries: Entry[];
}

export type NonSensitivePatients = Omit<Patient, 'ssn' | 'entries'>;

export type NewPatient = z.infer<typeof NewPatientSchema>;

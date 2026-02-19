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

export interface DiagnosesEntry {
	code: string;
	name: string;
	latin?: string;
}

export enum Gender {
	Male = 'male',
	Female = 'female',
	Other = 'other',
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Entry {}

export interface Patient extends NewPatient {
	id: string;
	entries: Entry[];
}

export type NonSensitivePatients = Omit<Patient, 'ssn' | 'entries'>;

export type NewPatient = z.infer<typeof NewPatientSchema>;

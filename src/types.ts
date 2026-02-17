import { z } from 'zod';
import { NewEntrySchema, NewPatientLogSchema } from './utils';

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

export interface PatientsLog extends NewPatientLog {
	id: string;
}

export type NonSensitiveLogs = Omit<PatientsLog, 'ssn'>;

export type NewPatientLog = z.infer<typeof NewPatientLogSchema>;

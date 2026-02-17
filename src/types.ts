import { z } from 'zod';
import { newEntrySchema } from './utils/utilsDiary';

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

export type NewDiaryEntry = z.infer<typeof newEntrySchema>;

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

export interface PatientsLog {
	id: string;
	name: string;
	dateOfBirth: string;
	ssn: string;
	gender: Gender;
	occupation: string;
}

export type NonSensitiveLogs = Omit<PatientsLog, 'ssn'>;

export type NewPatientLog = Omit<PatientsLog, 'id'>;

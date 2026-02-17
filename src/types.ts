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

export interface DiaryEntry {
	id: number;
	date: string;
	weather: Weather;
	visibility: Visibility;
	comment?: string;
}

export type NonSensitiveEntries = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

export interface DiagnosesEntry {
	code: string;
	name: string;
	latin?: string;
}

export interface PatientsLog {
	id: string;
	name: string;
	dateOfBirth: string;
	ssn: string;
	gender: string;
	occupation: string;
}

export type NonSensitiveLogs = Omit<PatientsLog, 'ssn'>;

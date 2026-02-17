import diaries from '../data/entries';

import { DiaryEntry, NewDiaryEntry, NonSensitiveEntries } from '../types';

const findById = (id: number): DiaryEntry | undefined => {
	const entry = diaries.find((d) => d.id === id);
	return entry;
};

const getEntries = (): DiaryEntry[] => {
	return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveEntries[] => {
	return diaries.map(({ id, date, weather, visibility }) => ({
		id,
		date,
		weather,
		visibility,
	}));
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
	const addNewDiary = {
		id: Math.max(...diaries.map((d) => d.id)) + 1,
		...entry,
	};

	diaries.push(addNewDiary);

	return addNewDiary;
};

export default {
	getEntries,
	addDiary,
	getNonSensitiveEntries,
	findById,
};

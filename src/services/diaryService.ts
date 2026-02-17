import diaries from '../data/entries';

import { DiaryEntry, NonSensitiveEntries } from '../types';

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

const addDiary = () => {
	return null;
};

export default {
	getEntries,
	addDiary,
	getNonSensitiveEntries,
	findById,
};

import diaries from '../data/entries';

import { DiaryEntry, NonSensitiveEntries } from '../types';

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
};

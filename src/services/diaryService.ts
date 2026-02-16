import diaries from '../data/entries';

import { DiaryEntry, NonSensitiveEntries } from '../types';

const getEntries = (): DiaryEntry[] => {
	return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveEntries[] => {
	return diaries;
};

const addDiary = () => {
	return null;
};

export default {
	getEntries,
	addDiary,
	getNonSensitiveEntries,
};

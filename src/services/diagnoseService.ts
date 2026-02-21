import diagoneses from '../data/diagnoses';

import type { Diagnosis } from '../types';

const getDiagnoses = (): Diagnosis[] => {
	return diagoneses;
};

const addDiagnose = () => {
	return null;
};

export default {
	getDiagnoses,
	addDiagnose,
};

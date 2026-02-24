import diagoneses from '../data/diagnoses';

import type { Diagnose } from '../types';

const getDiagnoses = (): Diagnose[] => {
	return diagoneses;
};

const addDiagnose = () => {
	return null;
};

export default {
	getDiagnoses,
	addDiagnose,
};

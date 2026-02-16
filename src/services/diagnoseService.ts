import diagoneses from '../data/diagnoses';

import { DiagnosesEntry } from '../types';

const getDiagnoses = (): DiagnosesEntry[] => {
	return diagoneses;
};

const addDiagnose = () => {
	return null;
};

export default {
	getDiagnoses,
	addDiagnose,
};

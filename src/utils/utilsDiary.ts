import z from 'zod';
import { NewDiaryEntry, Visibility, Weather } from '../types';

export const NewEntrySchema = z.object({
	weather: z.enum(Weather),
	visibility: z.enum(Visibility),
	date: z.iso.date(),
	comment: z.string(),
});

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
	return NewEntrySchema.parse(object);
};

export default toNewDiaryEntry;

import type { ReadonlyDeep } from 'type-fest';
import type { Data } from '@/types/data';
import transformData from './transformers/transform-data';
import configData from './config';
import sectionsData from './sections';

const data = { config: configData, sections: sectionsData } as const satisfies ReadonlyDeep<Data>;

export type PreciseData = typeof data;

export const cv = transformData(data);

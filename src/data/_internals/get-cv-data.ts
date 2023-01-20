import type { ReadonlyDeep } from 'type-fest';
import type { Data } from '@/types/data';
import transformData from './transform-data';
import configData from '../config';
import sectionsData from '../sections';

const data = { config: configData, sections: sectionsData } as const satisfies ReadonlyDeep<Data>;

export type PreciseData = typeof data;

const getCvData = transformData(data);

export default getCvData;

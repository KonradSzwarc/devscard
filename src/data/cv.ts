import { produce, Draft } from 'immer';
import type { Data } from '@/types/data';
import configData from './config';
import sectionsData from './sections';

const data = { config: configData, sections: sectionsData } as const satisfies Data;

export type PreciseData = typeof data;

export type DraftData = Draft<Data>;

type Callback = (data: DraftData) => void;

export const cv = (...callbacks: Callback[]): Data =>
  produce(data, (draft) => {
    callbacks.forEach((callback) => callback(draft));
  });

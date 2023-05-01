import type { Data } from '@/types/data';
import { produce } from 'immer';
import type { PreciseData } from './get-cv-data';
import type { DataTransformer } from './transformers';

const transformData =
  (data: PreciseData) =>
  (...callbacks: DataTransformer[]): Data =>
    // @ts-ignore -- waiting for https://github.com/sindresorhus/type-fest/pull/540 to be merged
    produce(data, (draft) => {
      callbacks.forEach((callback) => callback(draft));
    });

export default transformData;

import type { Locales } from 'locales-ts/types';

export interface I18n {
  locale: Locales;
  translations: {
    now: string;
  };
}

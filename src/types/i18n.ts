import type { Locales } from '@agbury/locales.ts/types';

export interface I18n {
  locale: Locales;
  translations: {
    now: string;
  };
}

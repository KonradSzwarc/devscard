import type { Locale } from 'date-fns';

export interface I18nConfig {
  locale: Locale;
  dateFormat: string;
  translations: {
    now: string;
  };
}

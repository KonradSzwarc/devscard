import type { Locale } from 'date-fns';

export type I18nConfig = Readonly<{
  locale: Locale;
  dateFormat: string;
  translations: Readonly<{
    now: string;
  }>;
}>;

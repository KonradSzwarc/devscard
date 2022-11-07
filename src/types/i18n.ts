import type { Locale } from './locale';

export interface I18n {
  locale: Locale;
  language: Language;
  translations: {
    now: TranslationOfWord;
  };
}

type Language = 'en' | 'pl' | 'es' | 'de' | 'fr';

interface TranslationOfWord {
  en: string;
  pl: string;
  es: string;
  de: string;
  fr: string;
}

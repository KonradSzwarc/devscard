import type { Locale } from 'date-fns';

export interface I18nConfig {
  /**
   * Language code used for date formatting, translations, and value of the page `lang` attribute.
   */
  locale: Locale;

  /**
   * Date format used when displaying date ranges in some sections.
   */
  dateFormat: string;

  /**
   * List of translations used in the application.
   */
  translations: {
    /**
     * Used in date ranges to represent the current date.
     */
    now: string;
  };
}

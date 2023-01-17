const getDateFormatter =
  (locale: string) =>
  (date: Date): string =>
    new Intl.DateTimeFormat(locale, { month: 'long' }).format(date).concat(' ', date.getFullYear().toString());

export default getDateFormatter;

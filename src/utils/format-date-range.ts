import { format } from 'date-fns';
import type { DateRange } from '@/types/shared';
import data from '@/data';

const { locale, dateFormat, translations } = data.config.i18n;

const formatDateRange = ([from, to]: DateRange): string =>
  format(from, dateFormat, { locale }).concat(' - ', to ? format(to, dateFormat, { locale }) : translations.now);

export default formatDateRange;

import { format } from 'date-fns';
import type { DateRange } from '@/types/shared';
import config from '@/data/config';

const { locale, dateFormat, translations } = config.i18n;

const formatDateRange = ([from, to]: DateRange): string =>
  format(from, dateFormat, { locale }).concat(' - ', to ? format(to, dateFormat, { locale }) : translations.now);

export default formatDateRange;

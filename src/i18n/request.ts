import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/i18n/config';

export default getRequestConfig(async ({ locale }) => {
  const validLocale =
    locale && (locales as readonly string[]).includes(locale) ? locale : 'es';
  return {
    locale: validLocale,
    timeZone: 'America/Bogota',
    now: new Date(),
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});
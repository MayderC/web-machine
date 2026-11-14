import { Locale } from '@/i18n/config';

export async function getProvidersProps(locale: Locale) {
  const messages = (await import(`../messages/${locale}.json`)).default;
  return {
    locale,
    messages,
    timeZone: 'America/Costa_Rica',
    now: new Date(),
  };
}
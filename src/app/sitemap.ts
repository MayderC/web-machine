import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const baseUrl = 'https://mayderc.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${baseUrl}/${locale}`])
  );

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
    alternates: { languages },
  }));
}

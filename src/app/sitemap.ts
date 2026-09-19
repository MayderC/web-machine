import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { siteUrl as baseUrl } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(
      locales.map((locale) => [locale, `${baseUrl}/${locale}`])
    ),
    'x-default': `${baseUrl}/es`,
  };

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
    alternates: { languages },
  }));
}

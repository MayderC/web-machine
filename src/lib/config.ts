const stripTrailingSlash = (value: string) => value.replace(/\/+$/, '');

export const siteUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL || 'https://mayderc.dev'
);

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contacto@mayderc.dev';

export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || '';

export const whatsappUrl = whatsappNumber
  ? `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`
  : '';

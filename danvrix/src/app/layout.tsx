import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Space_Mono } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://danvrix.dev'),
  title: {
    default: 'Danvrix.dev — Desarrollo web y software a medida',
    template: '%s | Danvrix.dev',
  },
  description:
    'Desarrollo de sitios web, aplicaciones a medida y asistentes de IA para pequeños negocios. Chat, voz, integraciones y automatizaciones.',
  applicationName: 'Danvrix.dev',
  authors: [{ name: 'Danvrix.dev', url: 'https://danvrix.dev' }],
  creator: 'Danvrix.dev',
  publisher: 'Danvrix.dev',
  category: 'technology',
  icons: {
    icon: '/danvrix-icon.svg',
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: 'https://danvrix.dev',
    siteName: 'Danvrix.dev',
    title: 'Danvrix.dev — Desarrollo web y software a medida',
    description:
      'Sitios web, aplicaciones a medida y asistentes de IA para pequeños negocios. Chat, voz, integraciones y automatizaciones.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Danvrix.dev — Desarrollo web y software a medida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Danvrix.dev — Desarrollo web y software a medida',
    description:
      'Sitios web, aplicaciones a medida y asistentes de IA para pequeños negocios.',
    images: ['/api/og'],
  },
};

export const viewport: Viewport = {
  themeColor: '#f8f7fa',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function DanvrixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      data-theme="danvrix"
      className={`h-full antialiased ${jakarta.variable} ${spaceMono.variable}`}
    >
      <head>
        <noscript>
          <style>{`.dv-reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-dv-bg font-sans text-dv-ink antialiased">
        {children}
      </body>
    </html>
  );
}

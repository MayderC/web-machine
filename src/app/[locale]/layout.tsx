import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Plus_Jakarta_Sans, Space_Mono } from 'next/font/google';
import { Providers } from '@/components/Providers';
import { getProvidersProps } from '@/lib/get-messages';
import { getServicesData } from '@/lib/data';
import { locales, Locale } from '@/i18n/config';
import { siteUrl } from '@/lib/config';
import '../globals.css';

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function getSeoCopy(locale: string) {
  const isES = locale === 'es';

  return {
    isES,
    title: isES
      ? 'Desarrollo Web en Costa Rica | MayderC'
      : 'Web Development in Costa Rica | MayderC',
    description: isES
      ? 'Desarrollo web en Costa Rica: aplicaciones web, backend y APIs con React, Next.js, TypeScript y Python, más integración de IA (LLMs, RAG, agentes) y gráficos 3D web. Freelance y consultoría para todo Costa Rica.'
      : 'Web development in Costa Rica: web apps, backend and APIs with React, Next.js, TypeScript and Python, plus AI integration (LLMs, RAG, agents) and 3D web graphics. Freelance and consulting across Costa Rica.',
    keywords: isES
      ? [
          'desarrollo web Costa Rica',
          'diseño de páginas web Costa Rica',
          'desarrollador web Costa Rica',
          'programador Costa Rica',
          'desarrollo de aplicaciones web Costa Rica',
          'ecommerce Costa Rica',
          'tienda en línea Costa Rica',
          'integración de IA Costa Rica',
          'React Costa Rica',
          'Next.js Costa Rica',
          'desarrollador fullstack Costa Rica',
          'freelance Costa Rica',
        ]
      : [
          'web development Costa Rica',
          'web developer Costa Rica',
          'web design Costa Rica',
          'Costa Rica software developer',
          'React developer Costa Rica',
          'Next.js Costa Rica',
          'AI integration Costa Rica',
          'ecommerce Costa Rica',
          'fullstack developer Costa Rica',
          'freelance Costa Rica',
        ],
    ogAlt: isES
      ? 'MayderC — Desarrollo Web en Costa Rica'
      : 'MayderC — Web Development in Costa Rica',
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { isES, title, description, keywords, ogAlt } = getSeoCopy(locale);
  const ogImage = `/api/og?lang=${locale}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    authors: [{ name: 'MayderC', url: siteUrl }],
    creator: 'MayderC',
    publisher: 'MayderC',
    category: 'technology',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        es: `${siteUrl}/es`,
        en: `${siteUrl}/en`,
        'x-default': `${siteUrl}/es`,
      },
    },
    other: {
      'geo.region': 'CR',
      'geo.placename': 'Costa Rica',
      'content-language': isES ? 'es-CR' : 'en',
    },
    openGraph: {
      type: 'website',
      locale: isES ? 'es_CR' : 'en_US',
      alternateLocale: isES ? 'en_US' : 'es_CR',
      url: `${siteUrl}/${locale}`,
      siteName: 'MayderC',
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#f7f6f0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const { messages, timeZone, now } = await getProvidersProps(locale as Locale);
  const { isES, description } = getSeoCopy(locale);
  const services = getServicesData(locale as Locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/${locale}`,
        name: 'MayderC',
        description,
        inLanguage: isES ? 'es-CR' : 'en',
        publisher: { '@id': `${siteUrl}/#business` },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#business`,
        name: isES
          ? 'MayderC — Desarrollo Web en Costa Rica'
          : 'MayderC — Web Development in Costa Rica',
        url: `${siteUrl}/${locale}`,
        image: `${siteUrl}/api/og?lang=${locale}`,
        description,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'CR',
        },
        areaServed: [
          { '@type': 'Country', name: 'Costa Rica' },
          { '@type': 'City', name: 'San José' },
          { '@type': 'City', name: 'Heredia' },
          { '@type': 'City', name: 'Alajuela' },
          { '@type': 'City', name: 'Cartago' },
        ],
        founder: { '@id': `${siteUrl}/#person` },
        sameAs: [
          'https://github.com/mayderc',
          'https://linkedin.com/in/mayderc',
        ],
        knowsLanguage: ['es', 'en'],
        serviceType: services.map((service) => service.title),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: isES ? 'Servicios de desarrollo web' : 'Web development services',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
            },
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'MayderC',
        url: `${siteUrl}/${locale}`,
        jobTitle: isES ? 'Desarrollador Fullstack' : 'Fullstack Developer',
        sameAs: [
          'https://github.com/mayderc',
          'https://linkedin.com/in/mayderc',
        ],
        knowsAbout: [
          'TypeScript',
          'React',
          'Next.js',
          'Node.js',
          'Python',
          'FastAPI',
          'PostgreSQL',
          'Redis',
          'WebGL',
          'GLSL',
          'Three.js',
          'LLM',
          'RAG',
          'AI Agents',
        ],
      },
    ],
  };

  return (
    <html
      lang={locale}
      className={`h-full antialiased ${jakarta.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var r=document.documentElement;var t=localStorage.getItem('theme');if(t){r.dataset.theme=t}var m=localStorage.getItem('mode');if(m==='dark'||(!m&&window.matchMedia('(prefers-color-scheme: dark)').matches)){r.classList.add('dark')}}catch(e){}})();",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="bg-retro-bg font-sans text-retro-ink antialiased selection:bg-retro-yellow selection:text-retro-on-accent min-h-full flex flex-col">
        <Providers
          locale={locale as Locale}
          messages={messages}
          timeZone={timeZone}
          now={now}
        >
          <main className="w-full pt-16 flex-1">
            <div className="flex flex-col w-full">{children}</div>
          </main>
        </Providers>
        <Script
          id="zyntia-chat-widget"
          src="https://www.zyntia.ai/widgets/vanilla/galaxia-chat.min.js"
          data-bot-id={process.env.NEXT_PUBLIC_ZYNTIA_PUBLIC_KEY}
          data-api-url="https://new.zyntia.ai/backendz"
          data-theme="dark"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

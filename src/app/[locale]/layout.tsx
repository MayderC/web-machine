import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Providers } from '@/components/Providers';
import { getProvidersProps } from '@/lib/get-messages';
import { locales, Locale } from '@/i18n/config';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale === 'es';

  return {
    metadataBase: new URL('https://mayderc.dev'),
    title: {
      default: isES
        ? 'MayderC — Desarrollador Fullstack & 3D Creative'
        : 'MayderC — Fullstack Developer & 3D Creative',
      template: '%s | MayderC',
    },
    description: isES
      ? 'Desarrollador de software especializado en React/Next.js, TypeScript, Python, integración de IA (LLMs, RAG, Agentes) y gráficos 3D web. Disponible para freelance y consultoría.'
      : 'Software developer specializing in React/Next.js, TypeScript, Python, AI integration (LLMs, RAG, Agents), and 3D web graphics. Available for freelance and consulting.',
    keywords: [
      'software developer',
      'fullstack',
      'react',
      'nextjs',
      'typescript',
      'python',
      'AI',
      'LLM',
      'RAG',
      '3D',
      'webgl',
      'freelance',
    ],
    authors: [{ name: 'MayderC', url: 'https://mayderc.dev' }],
    creator: 'MayderC',
    publisher: 'MayderC',
    robots: 'index, follow',
    alternates: {
      canonical: `https://mayderc.dev/${locale}`,
      languages: {
        es: 'https://mayderc.dev/es',
        en: 'https://mayderc.dev/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: isES ? 'es_ES' : 'en_US',
      alternateLocale: isES ? 'en_US' : 'es_ES',
      url: `https://mayderc.dev/${locale}`,
      siteName: 'MayderC',
      title: isES
        ? 'MayderC — Desarrollador Fullstack & 3D Creative'
        : 'MayderC — Fullstack Developer & 3D Creative',
      description: isES
        ? 'Desarrollador de software especializado en React/Next.js, TypeScript, Python, integración de IA y gráficos 3D web.'
        : 'Software developer specializing in React/Next.js, TypeScript, Python, AI integration, and 3D web graphics.',
      images: [
        {
          url: '/api/og',
          width: 1200,
          height: 630,
          alt: 'MayderC Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isES
        ? 'MayderC — Desarrollador Fullstack & 3D Creative'
        : 'MayderC — Fullstack Developer & 3D Creative',
      description: isES
        ? 'Desarrollador de software especializado en React/Next.js, TypeScript, Python, integración de IA y gráficos 3D web.'
        : 'Software developer specializing in React/Next.js, TypeScript, Python, AI integration, and 3D web graphics.',
      images: ['/api/og'],
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

  return (
    <html lang={locale} className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var m=localStorage.getItem('mode');if(m==='dark'||(!m&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'MayderC',
              url: 'https://mayderc.dev',
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
              jobTitle: 'Fullstack Developer & Creative Technologist',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
            }),
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
      </body>
    </html>
  );
}

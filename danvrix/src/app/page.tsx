import type { Metadata } from 'next';
import { DanvrixScrollProgress } from '@/components/danvrix/DanvrixScrollProgress';
import { DanvrixHeader } from '@/components/danvrix/DanvrixHeader';
import { DanvrixHero } from '@/components/danvrix/DanvrixHero';
import { DanvrixServices } from '@/components/danvrix/DanvrixServices';
import { DanvrixZyntia } from '@/components/danvrix/DanvrixZyntia';
import { DanvrixAIServices } from '@/components/danvrix/DanvrixAIServices';
import { DanvrixWork } from '@/components/danvrix/DanvrixWork';
import { DanvrixProcess } from '@/components/danvrix/DanvrixProcess';
import { DanvrixAbout } from '@/components/danvrix/DanvrixAbout';
import { DanvrixContact } from '@/components/danvrix/DanvrixContact';
import { DanvrixFooter } from '@/components/danvrix/DanvrixFooter';

export const metadata: Metadata = {
  title: 'Danvrix.dev — Desarrollo web y software a medida',
  description:
    'Desarrollo de sitios web, aplicaciones a medida y asistentes de IA para pequeños negocios. Chat, voz, integraciones y automatizaciones.',
  alternates: {
    canonical: 'https://danvrix.dev',
  },
  openGraph: {
    url: 'https://danvrix.dev',
    title: 'Danvrix.dev — Desarrollo web y software a medida',
    description:
      'Sitios web, aplicaciones a medida y asistentes de IA para pequeños negocios. Chat, voz, integraciones y automatizaciones.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Danvrix.dev',
  url: 'https://danvrix.dev',
  email: 'hola@danvrix.dev',
  description:
    'Desarrollo de sitios web, aplicaciones a medida y asistentes de IA para pequeños negocios. Chat, voz, integraciones y automatizaciones.',
  areaServed: {
    '@type': 'Country',
    name: 'Costa Rica',
  },
  serviceType: [
    'Desarrollo de sitios web',
    'Aplicaciones web a medida',
    'Chatbots de IA para web',
    'Atención por voz en tiempo real',
    'Integraciones y automatizaciones',
  ],
  knowsAbout: [
    'Desarrollo web',
    'React',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Python',
    'APIs',
    'Chatbots',
    'LLM',
    'RAG',
    'Voz en tiempo real',
  ],
};

export default function DanvrixPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-dv-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      <DanvrixScrollProgress />
      <DanvrixHeader />
      <main>
        <DanvrixHero />
        <DanvrixServices />
        <DanvrixZyntia />
        <DanvrixAIServices />
        <DanvrixWork />
        <DanvrixProcess />
        <DanvrixAbout />
        <DanvrixContact />
      </main>
      <DanvrixFooter />
    </>
  );
}

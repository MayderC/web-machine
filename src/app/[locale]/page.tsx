import { Metadata } from 'next';
import { Locale } from '@/i18n/config';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { TechStack } from '@/components/TechStack';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale === 'es';

  return {
    title: isES
      ? 'MayderC — Desarrollador Fullstack'
      : 'MayderC — Fullstack Developer',
    description: isES
      ? 'Desarrollador de software especializado en React/Next.js, TypeScript, Python, integración de IA (LLMs, RAG, Agentes) y gráficos 3D web. Disponible para freelance y consultoría.'
      : 'Software developer specializing in React/Next.js, TypeScript, Python, AI integration (LLMs, RAG, Agents), and 3D web graphics. Available for freelance and consulting.',
    openGraph: {
      title: isES
        ? 'MayderC — Desarrollador Fullstack'
        : 'MayderC — Fullstack Developer',
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
  };
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-full pt-16">
        <div className="flex flex-col w-full">
          <Hero />
          <Services />
          <Projects />
          <About />
          <TechStack />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
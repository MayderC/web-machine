import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { TechStack } from '@/components/TechStack';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

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

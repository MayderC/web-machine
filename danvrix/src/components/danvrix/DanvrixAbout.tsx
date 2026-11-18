import { Reveal } from './Reveal';

const principles = [
  {
    title: 'Alcance claro',
    description: 'Definimos qué resuelve el asistente y qué queda fuera antes de empezar.',
  },
  {
    title: 'Implementación mantenible',
    description: 'Código y configuración que tu equipo puede sostener en el tiempo.',
  },
  {
    title: 'Datos bajo tu control',
    description: 'Tus documentos, catálogo y conversaciones quedan en tu entorno.',
  },
  {
    title: 'Acompañamiento',
    description: 'Pruebas, ajustes y soporte después de publicar.',
  },
];

const stack = [
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Redis',
  'LLMs',
  'RAG',
  'Voz en tiempo real',
  'APIs',
];

export function DanvrixAbout() {
  return (
    <section id="estudio" className="border-b border-dv-border bg-dv-bg">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="dv-eyebrow">El estudio</p>
            <h2 className="mt-4 max-w-2xl text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-dv-ink sm:text-[32px]">
              Tecnología concreta para negocios pequeños
            </h2>
            <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-[1.7] text-dv-ink-2">
              <p>
                Danvrix.dev es un estudio técnico independiente. Construyo sitios,
                aplicaciones web y asistentes de IA para negocios reales.
              </p>
              <p>
                La IA entra cuando aporta valor; si tu proyecto no la necesita, se
                construye sin ella.
              </p>
              <p>
                Trabajo con alcances claros: definimos qué debe resolver el asistente, qué
                información usa y cómo se integra con tu negocio. La implementación queda
                probada y documentada.
              </p>
              <p>
                Si tu negocio es pequeño, una solución concreta y bien implementada suele
                ser más útil que montar un área de datos completa.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 50}>
                <div className="dv-card h-full p-5">
                  <div className="flex items-center gap-3">
                    <span className="dv-num font-mono text-[11px] text-dv-muted">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px flex-1 bg-dv-border" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-[14px] font-medium text-dv-ink">{principle.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-dv-ink-2">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={100}>
            <div className="rounded-2xl border border-dv-border bg-dv-surface p-6">
              <div className="flex items-baseline justify-between border-b border-dv-border pb-4">
                <span className="text-[13px] font-medium text-dv-ink">Stack técnico</span>
                <span className="font-mono text-[11px] text-dv-muted">danvrix.dev</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span key={item} className="dv-tag">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-dv-raised p-4">
                <p className="text-[11px] text-dv-muted">Base</p>
                <p className="mt-1 text-[14px] leading-[1.6] text-dv-ink">
                  Costa Rica · UTC-6 · Trabajo remoto con negocios de cualquier lugar.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

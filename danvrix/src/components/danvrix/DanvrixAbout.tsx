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
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-dv-blue" />
              <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-dv-muted">
                EL ESTUDIO
              </span>
            </div>
            <h2 className="max-w-2xl font-sans text-3xl font-extrabold tracking-tight text-dv-navy sm:text-4xl">
              Tecnología concreta para negocios pequeños.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-dv-muted">
              <p>
                Danvrix.dev es un estudio técnico independiente. Construyo sitios,
                aplicaciones web y asistentes de IA para negocios reales.
              </p>
              <p>
                La IA entra cuando aporta valor; si tu proyecto no la necesita, se
                construye sin ella.
              </p>
              <p>
                Trabajo con alcances claros: definimos qué debe resolver el asistente,
                qué información usa y cómo se integra con tu negocio. La implementación
                queda probada y documentada.
              </p>
              <p>
                Si tu negocio es pequeño, una solución concreta y bien implementada suele
                ser más útil que montar un área de datos completa.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 80}>
                <div className="h-full rounded-lg border border-dv-border bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-dv-blue">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px flex-1 bg-dv-border" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-dv-navy">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-dv-muted">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <div className="rounded-xl border border-dv-border bg-white p-6 shadow-[0_14px_36px_rgba(11,31,58,0.06)]">
              <div className="flex items-center justify-between border-b border-dv-border pb-4">
                <span className="font-mono text-[11px] font-bold tracking-[0.16em] text-dv-muted">
                  STACK TÉCNICO
                </span>
                <span className="font-mono text-[10px] font-bold tracking-wide text-dv-blue">
                  DANVRIX.DEV
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-dv-border bg-dv-bg px-2.5 py-1 font-mono text-[11px] font-bold text-dv-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-dv-bg p-4">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-dv-muted">
                  Base
                </p>
                <p className="mt-1 text-sm leading-relaxed text-dv-navy">
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

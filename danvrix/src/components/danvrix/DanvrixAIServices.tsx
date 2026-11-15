import { Reveal } from './Reveal';

const options = [
  {
    number: '01',
    label: 'CON ZYNTIA',
    title: 'Mi plataforma para chat y voz.',
    description:
      'Implementación sobre una base que ya construí y probé. Ideal si necesitas un asistente estándar y quieres salir rápido.',
    bullets: [
      'Chat y voz sobre la misma base',
      'RAG sobre tus documentos y catálogo',
      'Widget embebible en tu web',
      'Transferencia a una persona en chat',
    ],
    note: 'Base probada · Implementación más rápida',
  },
  {
    number: '02',
    label: 'A MEDIDA',
    title: 'Una solución construida para tu caso.',
    description:
      'Para flujos específicos, integraciones con tus sistemas o requisitos que Zyntia no cubre.',
    bullets: [
      'LLMs, RAG y voz a medida',
      'Integraciones con APIs, CRM o agenda',
      'Canales y flujos específicos',
      'Control total de datos y arquitectura',
    ],
    note: 'Mayor flexibilidad · Alcance a cotizar',
  },
];

export function DanvrixAIServices() {
  return (
    <section id="asistentes" className="border-b border-dv-border bg-dv-bg">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-dv-blue" />
              <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-dv-muted">
                ASISTENTES DE IA
              </span>
            </div>
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-dv-navy sm:text-4xl">
              Dos formas de implementarlo.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-dv-muted">
              No todos los negocios necesitan lo mismo. En la primera conversación vemos
              cuál de los dos caminos encaja mejor.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {options.map((option, index) => (
            <Reveal key={option.number} delay={index * 90}>
              <article className="group h-full rounded-lg border border-dv-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-dv-navy/30 hover:shadow-[0_12px_30px_rgba(11,31,58,0.06)]">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[11px] font-bold tracking-[0.16em] text-dv-blue">
                    {option.number}
                  </span>
                  <span className="font-mono text-[9px] font-bold tracking-[0.14em] text-dv-muted">
                    {option.label}
                  </span>
                  <span className="h-px flex-1 bg-dv-border transition-colors group-hover:bg-dv-blue/40" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-dv-navy">{option.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dv-muted">
                  {option.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {option.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-dv-muted">
                      <span className="mt-2 h-px w-3 shrink-0 bg-dv-blue" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-dv-border pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-dv-muted">
                  {option.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col gap-4 border-t border-dv-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-dv-muted">
              No tienes que decidirlo ahora. Revisamos tu caso y te digo qué camino tiene
              más sentido.
            </p>
            <a
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-dv-navy px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-dv-navy-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dv-blue"
              href="#contacto"
            >
              Hablemos de tu caso
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

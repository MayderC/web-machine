import { Reveal } from './Reveal';

const options = [
  {
    number: '01',
    label: 'Con Zyntia',
    title: 'Mi plataforma para chat y voz',
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
    label: 'A medida',
    title: 'Una solución construida para tu caso',
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
            <p className="dv-eyebrow">Asistentes de IA</p>
            <h2 className="mt-4 text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-dv-ink sm:text-[32px]">
              Dos formas de implementarlo
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-dv-ink-2">
              No todos los negocios necesitan lo mismo. En la primera conversación vemos
              cuál de los dos caminos encaja mejor.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {options.map((option, index) => (
            <Reveal key={option.number} delay={index * 50}>
              <article className="dv-card flex h-full flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="dv-num font-mono text-[11px] text-dv-accent-ink">
                    {option.number}
                  </span>
                  <span className="text-[12px] text-dv-muted">{option.label}</span>
                  <span className="h-px flex-1 bg-dv-border" aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-[17px] font-medium text-dv-ink">{option.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-dv-ink-2">
                  {option.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {option.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-[14px] text-dv-ink-2">
                      <span className="mt-[7px] h-[5px] w-[5px] shrink-0 bg-dv-accent-line" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-dv-border pt-4 text-[11px] text-dv-muted">
                  {option.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col gap-4 border-t border-dv-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-[14px] leading-[1.6] text-dv-ink-2">
              No tienes que decidirlo ahora. Revisamos tu caso y te digo qué camino tiene
              más sentido.
            </p>
            <a className="dv-btn dv-btn-primary shrink-0" href="#contacto">
              Hablemos de tu caso
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

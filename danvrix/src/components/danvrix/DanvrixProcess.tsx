import { Reveal } from './Reveal';

const steps = [
  {
    number: '01',
    title: 'Revisión',
    description:
      'Entiendo qué hace tu negocio, qué preguntas recibe y qué tarea concreta debe resolver el asistente.',
    detail: 'Alcance y preguntas clave',
  },
  {
    number: '02',
    title: 'Implementación',
    description:
      'Construyo o configuro la solución: sitio, aplicación o asistente. Conecto tus datos y la adapto a tu negocio.',
    detail: 'Desarrollo, datos e integraciones',
  },
  {
    number: '03',
    title: 'Pruebas',
    description:
      'Probamos preguntas reales, llamadas y casos límite antes de publicar. Ajustamos lo que no suene natural.',
    detail: 'Casos reales y límites',
  },
  {
    number: '04',
    title: 'Lanzamiento',
    description:
      'Publicamos, revisamos el comportamiento y corregimos lo necesario para que quede estable.',
    detail: 'Publicación y ajustes',
  },
];

export function DanvrixProcess() {
  return (
    <section id="proceso" className="border-b border-dv-border bg-dv-bg">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="dv-eyebrow">Cómo trabajo</p>
            <h2 className="mt-4 text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-dv-ink sm:text-[32px]">
              De la idea a una solución funcionando
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-dv-ink-2">
              Un proceso corto y ordenado. Tú conoces tu negocio; yo me encargo de la parte
              técnica.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-0 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 50}>
              <div className="relative border-l border-dv-border pb-8 pl-6 last:pb-0 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pr-6 lg:pt-8">
                <span className="absolute -left-[4px] top-0 h-2 w-2 border-2 border-dv-bg bg-dv-accent lg:-top-[5px] lg:left-0" />
                <span className="dv-num font-mono text-[11px] text-dv-accent-ink">
                  {step.number}
                </span>
                <h3 className="mt-3 text-[17px] font-medium text-dv-ink">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-dv-ink-2">
                  {step.description}
                </p>
                <p className="mt-4 text-[11px] text-dv-muted">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 border-t border-dv-border pt-6">
            <p className="max-w-3xl text-[14px] leading-[1.6] text-dv-ink-2">
              Definimos el alcance y las preguntas clave antes de configurar nada. Así la
              solución resuelve lo que realmente necesita tu negocio.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

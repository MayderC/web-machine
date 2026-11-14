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
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-dv-blue" />
              <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-dv-muted">
                CÓMO TRABAJO
              </span>
            </div>
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-dv-navy sm:text-4xl">
              De la idea a una solución funcionando.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-dv-muted">
              Un proceso corto y ordenado. Tú conoces tu negocio; yo me encargo de la
              parte técnica.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-0 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90}>
              <div className="relative border-l border-dv-border pb-8 pl-6 last:pb-0 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pr-6 lg:pt-8">
                <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-dv-blue lg:-top-[5px] lg:left-0" />
                <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-dv-blue">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-bold text-dv-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dv-muted">
                  {step.description}
                </p>
                <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-dv-muted">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex items-start gap-3 rounded-lg border border-dv-border bg-white p-5">
            <span className="mt-2 h-px w-4 shrink-0 bg-dv-blue" />
            <p className="text-sm leading-relaxed text-dv-muted">
              Definimos el alcance y las preguntas clave antes de configurar nada. Así la
              solución resuelve lo que realmente necesita tu negocio.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

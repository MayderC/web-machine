import { Reveal } from './Reveal';

const services = [
  {
    number: '01',
    category: 'DESARROLLO WEB',
    title: 'Sitios web y landing pages',
    description:
      'Diseño y desarrollo sitios rápidos, claros y adaptados a tu negocio. Enfocados en accesibilidad, rendimiento y mantenimiento.',
    tags: ['Next.js', 'React', 'Tailwind'],
  },
  {
    number: '02',
    category: 'DESARROLLO WEB',
    title: 'Aplicaciones web a medida',
    description:
      'Paneles, portales, dashboards y herramientas internas. Construidas con Next.js, React y TypeScript.',
    tags: ['Next.js', 'TypeScript', 'APIs'],
  },
  {
    number: '03',
    category: 'IA APLICADA',
    title: 'Asistentes de IA',
    description:
      'Chatbots que responden preguntas, capturan datos y agendan citas con la información real de tu negocio.',
    tags: ['RAG', 'Widget', 'Chat'],
  },
  {
    number: '04',
    category: 'IA APLICADA',
    title: 'Voz en tiempo real',
    description:
      'Atención por voz desde la web. El visitante habla y el asistente responde con voz natural, adaptado a tu caso.',
    tags: ['Voz', 'Streaming', 'Web'],
  },
  {
    number: '05',
    category: 'INTEGRACIONES',
    title: 'Integraciones y automatizaciones',
    description:
      'Conecto tu web con catálogo, agenda, CRM, pagos o APIs. Menos trabajo manual y menos errores.',
    tags: ['APIs', 'Automatización', 'Datos'],
  },
  {
    number: '06',
    category: 'SOPORTE',
    title: 'Puesta en marcha y soporte',
    description:
      'Pruebas, despliegue, ajustes y acompañamiento después de publicar para que quede estable.',
    tags: ['Testing', 'Deploy', 'Soporte'],
  },
];

export function DanvrixServices() {
  return (
    <section id="servicios" className="border-b border-dv-border bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-dv-blue" />
              <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-dv-muted">
                SERVICIOS
              </span>
            </div>
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-dv-navy sm:text-4xl">
              Lo que puedo construir para tu negocio.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-dv-muted">
              Sitios, aplicaciones y asistentes de IA. Puedes empezar con un sitio o una
              aplicación y sumar IA después.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 80}>
              <article className="group h-full rounded-lg border border-dv-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-dv-navy/30 hover:shadow-[0_12px_30px_rgba(11,31,58,0.06)]">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[11px] font-bold tracking-[0.16em] text-dv-blue">
                    {service.number}
                  </span>
                  <span className="font-mono text-[9px] font-bold tracking-[0.14em] text-dv-muted">
                    {service.category}
                  </span>
                  <span className="h-px flex-1 bg-dv-border transition-colors group-hover:bg-dv-blue/40" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-dv-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dv-muted">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-dv-border bg-dv-bg px-2 py-0.5 font-mono text-[10px] font-bold tracking-wide text-dv-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 flex items-start gap-3 text-sm leading-relaxed text-dv-muted">
            <span className="mt-2 h-px w-4 shrink-0 bg-dv-blue" />
            Puedo trabajar con la web que ya tienes o construir una desde cero.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

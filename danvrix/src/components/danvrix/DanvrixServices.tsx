import { Reveal } from './Reveal';

const services = [
  {
    number: '01',
    category: 'Desarrollo web',
    title: 'Sitios web y landing pages',
    description:
      'Diseño y desarrollo sitios rápidos, claros y adaptados a tu negocio. Enfocados en accesibilidad, rendimiento y mantenimiento.',
    tags: ['Next.js', 'React', 'Tailwind'],
  },
  {
    number: '02',
    category: 'Desarrollo web',
    title: 'Aplicaciones web a medida',
    description:
      'Paneles, portales, dashboards y herramientas internas. Construidas con Next.js, React y TypeScript.',
    tags: ['Next.js', 'TypeScript', 'APIs'],
  },
  {
    number: '03',
    category: 'IA aplicada',
    title: 'Asistentes de IA',
    description:
      'Chatbots que responden preguntas, capturan datos y agendan citas. Puedo implementarlo con Zyntia o construir una solución a medida.',
    tags: ['RAG', 'Widget', 'Chat'],
  },
  {
    number: '04',
    category: 'IA aplicada',
    title: 'Voz en tiempo real',
    description:
      'Atención por voz desde la web. El visitante habla y el asistente responde con voz natural, adaptado a tu caso.',
    tags: ['Voz', 'Streaming', 'Web'],
  },
  {
    number: '05',
    category: 'Integraciones',
    title: 'Integraciones y automatizaciones',
    description:
      'Conecto tu web con catálogo, agenda, CRM, pagos o APIs. Menos trabajo manual y menos errores.',
    tags: ['APIs', 'Automatización', 'Datos'],
  },
  {
    number: '06',
    category: 'Soporte',
    title: 'Puesta en marcha y soporte',
    description:
      'Pruebas, despliegue, ajustes y acompañamiento después de publicar para que quede estable.',
    tags: ['Testing', 'Deploy', 'Soporte'],
  },
];

export function DanvrixServices() {
  return (
    <section id="servicios" className="border-b border-dv-border bg-dv-surface">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="dv-eyebrow">Servicios</p>
            <h2 className="mt-4 text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-dv-ink sm:text-[32px]">
              Lo que puedo construir para tu negocio
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-dv-ink-2">
              Sitios, aplicaciones y asistentes de IA. Puedes empezar con un sitio o una
              aplicación y sumar IA después.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 50}>
              <article className="dv-card h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="dv-num font-mono text-[11px] text-dv-accent-ink">
                    {service.number}
                  </span>
                  <span className="text-[12px] text-dv-muted">{service.category}</span>
                  <span className="h-px flex-1 bg-dv-border" aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-[17px] font-medium text-dv-ink">{service.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-dv-ink-2">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="dv-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 max-w-2xl text-[14px] leading-[1.6] text-dv-ink-2">
            Puedo trabajar con la web que ya tienes o construir una desde cero.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

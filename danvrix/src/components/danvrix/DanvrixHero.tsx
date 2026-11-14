import { HeroIllustration } from './HeroIllustration';

const trustPoints = [
  'Desarrollo a medida',
  'Alcance claro',
  'Para negocios pequeños',
];

export function DanvrixHero() {
  return (
    <section id="inicio" className="border-b border-dv-border bg-dv-bg">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-12 md:px-8 md:py-16 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-dv-blue" />
            <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-dv-muted">
              DANVRIX.DEV · DESARROLLO WEB & SOFTWARE
            </span>
          </div>

          <h1 className="max-w-3xl font-sans text-4xl font-extrabold leading-[1.08] tracking-tight text-dv-navy sm:text-5xl lg:text-6xl">
            Sitios web, aplicaciones y asistentes de IA.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-dv-muted sm:text-lg">
            Desarrollo a medida para tu negocio, con o sin IA. Diseño, implementación e
            integraciones según el caso.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-dv-navy px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-dv-navy-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dv-blue"
              href="#contacto"
            >
              Cuéntame tu proyecto
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-dv-border bg-white px-5 text-sm font-semibold text-dv-navy transition-all hover:-translate-y-0.5 hover:border-dv-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dv-blue"
              href="#proyectos"
            >
              Ver proyectos
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-xs font-medium text-dv-muted">
                <span className="h-px w-3 bg-dv-blue" />
                {point}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-dv-muted">
            Definimos el alcance juntos antes de implementar. Tú conoces el negocio; yo
            me encargo de la parte técnica.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="mx-auto w-full max-w-[640px]">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

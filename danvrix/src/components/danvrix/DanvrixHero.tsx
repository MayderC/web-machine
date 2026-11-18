import { HeroIllustration } from './HeroIllustration';

const facts = ['Desarrollo a medida', 'Alcance claro', 'Para negocios pequeños'];

export function DanvrixHero() {
  return (
    <section id="inicio" className="border-b border-dv-border bg-dv-bg">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-12 pt-14 md:px-8 md:pt-20 lg:grid-cols-12 lg:gap-16 lg:pt-24">
        <div className="lg:col-span-6">
          <p className="dv-eyebrow">Desarrollo web y software</p>

          <h1 className="mt-6 text-[34px] font-medium leading-[1.06] tracking-[-0.02em] text-dv-ink sm:text-[42px] lg:text-[48px]">
            Sitios, aplicaciones y asistentes de IA para negocios pequeños
          </h1>

          <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.6] text-dv-ink-2">
            Desarrollo a medida, con o sin IA. Definimos el alcance juntos antes de
            escribir la primera línea.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="dv-btn dv-btn-primary" href="#contacto">
              Cuéntame tu proyecto
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
            <a className="dv-btn dv-btn-secondary" href="#proyectos">
              Ver proyectos
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="mx-auto w-full max-w-[560px]">
            <HeroIllustration />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-dv-border py-4 text-[13px] text-dv-muted">
          {facts.map((fact, index) => (
            <li key={fact} className="flex items-center gap-4">
              {index > 0 && (
                <span
                  className="hidden h-3 w-px bg-dv-border sm:block"
                  aria-hidden="true"
                />
              )}
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

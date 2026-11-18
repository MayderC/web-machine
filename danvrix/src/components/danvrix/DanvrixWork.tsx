import { Reveal } from './Reveal';

const zayrelTags = ['Next.js', 'TypeScript', '3D', 'E-commerce'];
const colabTags = ['React', 'Leaflet', 'WebSockets', 'Offline-first'];

function ZayrelVisual() {
  return (
    <div className="relative overflow-hidden border-b border-dv-border bg-dv-bg p-5">
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-dv-border bg-dv-surface">
        <div className="flex items-center gap-1.5 border-b border-dv-border px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-dv-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-dv-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-dv-border" />
          <span className="ml-2 font-mono text-[10px] text-dv-muted">zayrelstudio.com</span>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          <div className="col-span-2 rounded-md bg-dv-accent-soft p-3">
            <p className="text-[10px] text-dv-accent-ink">Nueva colección</p>
            <p className="mt-1 text-[14px] font-medium leading-tight text-dv-ink">
              Camisetas personalizadas
            </p>
            <div className="mt-3 flex h-20 items-center justify-center rounded bg-dv-surface/70">
              <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
                <path
                  d="M24 10c0 3 3.6 5 8 5s8-2 8-5l9 4-5 10-5-2v32H25V22l-5 2-5-10 9-4z"
                  fill="var(--c-accent-line)"
                />
                <rect x="29" y="27" width="6" height="6" fill="var(--c-surface)" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-1 flex-col items-center justify-center rounded border border-dv-border bg-dv-raised p-2 text-center">
              <span className="material-symbols-outlined text-[18px] text-dv-muted">
                view_in_ar
              </span>
              <p className="mt-1 text-[10px] text-dv-muted">Mockup 3D</p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center rounded border border-dv-border bg-dv-raised p-2 text-center">
              <span className="material-symbols-outlined text-[18px] text-dv-muted">styler</span>
              <p className="mt-1 text-[10px] text-dv-muted">Editor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColabVisual() {
  return (
    <div className="relative overflow-hidden border-b border-dv-border bg-dv-bg p-5">
      <div className="h-full rounded-lg border border-dv-border bg-dv-surface p-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-dv-muted">Rutas · tiempo real</span>
          <span className="flex items-center gap-1.5 text-[10px] text-dv-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-dv-accent-line" />
            En vivo
          </span>
        </div>
        <svg
          viewBox="0 0 300 150"
          className="mt-3 h-[120px] w-full"
          role="img"
          aria-label="Mapa con una ruta de transporte en tiempo real"
        >
          <path
            d="M0 44H300M0 104H300M86 0V150M212 0V150"
            stroke="var(--c-border)"
            strokeWidth="1"
          />
          <path
            d="M20 120 C 60 40, 120 140, 160 70 S 240 20, 280 60"
            fill="none"
            stroke="var(--c-border)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          <path
            d="M20 120 C 60 40, 120 140, 160 70 S 240 20, 280 60"
            fill="none"
            stroke="var(--c-accent-line)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="120" r="4" fill="var(--c-primary)" />
          <circle cx="160" cy="70" r="4" fill="var(--c-accent-line)" />
          <circle cx="280" cy="60" r="4" fill="var(--c-accent-line)" stroke="var(--c-surface)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

export function DanvrixWork() {
  return (
    <section id="otros-proyectos" className="border-b border-dv-border bg-dv-surface">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="dv-eyebrow">Más proyectos</p>
            <h2 className="mt-4 text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-dv-ink sm:text-[32px]">
              También construyo producto digital
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-dv-ink-2">
              Además de Zyntia, estos son otros proyectos en producción que muestran el
              tipo de cosas que puedo construir.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <article className="dv-card h-full overflow-hidden">
              <ZayrelVisual />
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[17px] font-medium text-dv-ink">Zayrel Studio</h3>
                  <span className="text-[11px] text-dv-muted">En producción</span>
                </div>
                <p className="mt-2 text-[14px] leading-[1.6] text-dv-ink-2">
                  Tienda de camisetas personalizadas con catálogo, probador virtual y
                  editor de diseño con mockup 3D.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {zayrelTags.map((tag) => (
                    <span key={tag} className="dv-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-dv-accent-ink transition-colors hover:text-dv-ink"
                  href="https://www.zayrelstudio.com/#inicio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar Zayrel Studio
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={60}>
            <article className="dv-card h-full overflow-hidden">
              <ColabVisual />
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[17px] font-medium text-dv-ink">
                    ColabCountry / MoveNow
                  </h3>
                  <span className="text-[11px] text-dv-muted">Logística</span>
                </div>
                <p className="mt-2 text-[14px] leading-[1.6] text-dv-ink-2">
                  Panel de rutas y unidades de transporte en tiempo real, con mapas y
                  soporte para redes móviles de baja cobertura.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {colabTags.map((tag) => (
                    <span key={tag} className="dv-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-dv-accent-ink transition-colors hover:text-dv-ink"
                  href="https://github.com/mayderc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en GitHub
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

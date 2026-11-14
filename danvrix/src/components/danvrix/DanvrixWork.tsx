import { Reveal } from './Reveal';

function ZayrelVisual() {
  return (
    <div className="relative overflow-hidden rounded-t-lg border-b border-dv-border bg-dv-bg p-5">
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-dv-border bg-white shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-dv-border px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-dv-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-dv-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-dv-border" />
          <span className="ml-2 font-mono text-[9px] font-bold tracking-wide text-dv-muted">
            zayrelstudio.com
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          <div className="col-span-2 rounded-md bg-dv-blue-soft p-3">
            <p className="font-mono text-[8px] font-bold tracking-[0.14em] text-dv-blue">
              NUEVA COLECCIÓN
            </p>
            <p className="mt-1 text-sm font-extrabold leading-tight text-dv-navy">
              Camisetas personalizadas
            </p>
            <div className="mt-3 flex h-16 items-center justify-center rounded bg-white/70">
              <span className="material-symbols-outlined text-[28px] text-dv-navy/40">
                checkroom
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-1 flex-col items-center justify-center rounded border border-dv-border bg-dv-bg p-2 text-center">
              <span className="material-symbols-outlined text-[18px] text-dv-blue">view_in_ar</span>
              <p className="mt-1 font-mono text-[8px] font-bold text-dv-muted">MOCKUP 3D</p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center rounded border border-dv-border bg-dv-bg p-2 text-center">
              <span className="material-symbols-outlined text-[18px] text-dv-blue">styler</span>
              <p className="mt-1 font-mono text-[8px] font-bold text-dv-muted">EDITOR</p>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute bottom-3 right-3 rounded bg-dv-navy px-2 py-1 font-mono text-[9px] font-bold tracking-wide text-white">
        3D / E-COMMERCE
      </span>
    </div>
  );
}

function ColabVisual() {
  return (
    <div className="relative overflow-hidden rounded-t-lg border-b border-dv-border bg-dv-bg p-5">
      <div className="h-full rounded-lg border border-dv-border bg-white p-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] font-bold tracking-wide text-dv-muted">
            RUTAS / TIEMPO REAL
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[8px] font-bold text-dv-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-dv-blue" />
            LIVE
          </span>
        </div>
        <svg
          viewBox="0 0 300 150"
          className="mt-3 h-[120px] w-full"
          role="img"
          aria-label="Mapa con una ruta de transporte en tiempo real"
        >
          <path
            d="M20 120 C 60 40, 120 140, 160 70 S 240 20, 280 60"
            fill="none"
            stroke="#d6dfea"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          <path
            d="M20 120 C 60 40, 120 140, 160 70 S 240 20, 280 60"
            fill="none"
            stroke="#1d4ed8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="120" r="4" fill="#1d4ed8" />
          <circle cx="160" cy="70" r="4" fill="#1d4ed8" />
          <circle cx="280" cy="60" r="4" fill="#0b1f3a" />
        </svg>
      </div>
      <span className="absolute bottom-3 right-3 rounded bg-dv-navy px-2 py-1 font-mono text-[9px] font-bold tracking-wide text-white">
        MAPAS / WEBSOCKETS
      </span>
    </div>
  );
}

export function DanvrixWork() {
  return (
    <section id="otros-proyectos" className="border-b border-dv-border bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-dv-blue" />
              <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-dv-muted">
                MÁS PROYECTOS
              </span>
            </div>
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-dv-navy sm:text-4xl">
              También construyo producto digital.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-dv-muted">
              Además de Zyntia, estos son otros proyectos en producción que muestran el
              tipo de cosas que puedo construir.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <article className="h-full overflow-hidden rounded-lg border border-dv-border bg-white transition-all hover:-translate-y-0.5 hover:border-dv-navy/30 hover:shadow-[0_14px_36px_rgba(11,31,58,0.07)]">
              <ZayrelVisual />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-dv-navy">Zayrel Studio</h3>
                  <span className="rounded border border-dv-border bg-dv-bg px-2 py-0.5 font-mono text-[10px] font-bold text-dv-muted">
                    EN PRODUCCIÓN
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-dv-muted">
                  Tienda de camisetas personalizadas con catálogo, probador virtual y
                  editor de diseño con mockup 3D.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {['Next.js', 'TypeScript', '3D', 'E-commerce'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-dv-border bg-dv-bg px-2 py-0.5 font-mono text-[10px] font-bold text-dv-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-dv-blue transition-colors hover:text-dv-navy"
                  href="https://www.zayrelstudio.com/#inicio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar Zayrel Studio
                  <span className="material-symbols-outlined text-[17px]">open_in_new</span>
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="h-full overflow-hidden rounded-lg border border-dv-border bg-white transition-all hover:-translate-y-0.5 hover:border-dv-navy/30 hover:shadow-[0_14px_36px_rgba(11,31,58,0.07)]">
              <ColabVisual />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-dv-navy">ColabCountry / MoveNow</h3>
                  <span className="rounded border border-dv-border bg-dv-bg px-2 py-0.5 font-mono text-[10px] font-bold text-dv-muted">
                    LOGÍSTICA
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-dv-muted">
                  Panel de rutas y unidades de transporte en tiempo real, con mapas y
                  soporte para redes móviles de baja cobertura.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {['React', 'Leaflet', 'WebSockets', 'Offline-first'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-dv-border bg-dv-bg px-2 py-0.5 font-mono text-[10px] font-bold text-dv-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-dv-blue transition-colors hover:text-dv-navy"
                  href="https://github.com/mayderc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en GitHub
                  <span className="material-symbols-outlined text-[17px]">open_in_new</span>
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

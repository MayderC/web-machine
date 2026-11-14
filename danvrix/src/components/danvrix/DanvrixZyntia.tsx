import { Reveal } from './Reveal';

const capabilities = [
  'RAG sobre documentos y catálogo',
  'Voz en tiempo real con Deepgram y Cartesia',
  'Widget embebible en cualquier web',
  'Transferencia a una persona en chat',
  'Búsqueda de productos y agendamiento',
  'Herramientas para ejecutar acciones',
];

export function DanvrixZyntia() {
  return (
    <section id="proyectos" className="border-b border-white/10 bg-dv-navy">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#9db8d8]" />
              <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-[#9db8d8]">
                PROYECTO DESTACADO
              </span>
            </div>
            <h2 className="max-w-2xl font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Zyntia: agentes de IA para chat y voz.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#c7d6e8]">
              Zyntia es uno de mis proyectos: una plataforma para crear agentes que
              atienden por chat y voz desde una web. La usé para construir asistentes con
              RAG, voz en tiempo real y transferencia a una persona en chat. Para otros
              negocios, implemento una solución propia según lo que necesiten.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#dbe6f2]">
                  <span className="mt-2 h-px w-3 shrink-0 bg-[#9db8d8]" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#9db8d8]">
              Zyntia es una de las herramientas que puedo usar. Si tu negocio necesita
              otra arquitectura, la implemento a medida.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-dv-navy transition-all hover:-translate-y-0.5 hover:bg-dv-blue-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href="https://www.zyntia.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar Zyntia
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
              <a
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/25 px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href="#contacto"
              >
                Quiero algo similar
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <div className="rounded-xl border border-white/10 bg-white p-4 text-dv-navy shadow-[0_30px_70px_rgba(0,0,0,0.28)]">
              <div className="flex items-center justify-between border-b border-dv-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-dv-blue" />
                  <span className="font-mono text-[11px] font-bold tracking-wider">
                    ZYNTIA · AGENTES DE IA
                  </span>
                </div>
                <span className="rounded border border-dv-border bg-dv-bg px-2 py-0.5 font-mono text-[10px] font-bold tracking-wide text-dv-muted">
                  EN PRODUCCIÓN
                </span>
              </div>

              <div className="space-y-3 py-4">
                <div className="ml-auto max-w-[88%] rounded-xl rounded-br-sm bg-dv-blue px-3.5 py-2.5 text-sm leading-relaxed text-white">
                  ¿Puedo agendar una cita para el viernes?
                </div>
                <div className="max-w-[88%] rounded-xl rounded-bl-sm border border-dv-border bg-dv-bg px-3.5 py-2.5 text-sm leading-relaxed text-dv-navy">
                  Claro. Tengo disponibilidad el viernes a las 10:00 y a las 15:30.
                  ¿Cuál prefieres?
                </div>
                <div className="max-w-[88%] rounded-xl rounded-bl-sm border border-dv-border bg-white px-3.5 py-2.5 text-sm leading-relaxed text-dv-navy">
                  Listo, te comparto el enlace para confirmar. También puedo transferirte
                  con una persona por chat si lo necesitas.
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-dv-border pt-3">
                {[
                  ['Canal', 'Web'],
                  ['Voz', 'Activa'],
                  ['Datos', 'RAG'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-md bg-dv-bg px-2.5 py-2">
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-dv-muted">
                      {label}
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-dv-navy">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

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
    <section id="proyectos" className="bg-dv-primary">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="dv-eyebrow dv-eyebrow-light">Proyecto destacado</p>
            <h2 className="mt-4 max-w-2xl text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-dv-on-primary sm:text-[32px] lg:text-[38px]">
              Zyntia: agentes de IA para chat y voz
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.7] text-dv-on-primary-2">
              Zyntia es uno de mis proyectos: una plataforma para crear agentes que
              atienden por chat y voz desde una web. La usé para construir asistentes con
              RAG, voz en tiempo real y transferencia a una persona en chat. Para otros
              negocios, implemento una solución propia según lo que necesiten.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] leading-[1.6] text-dv-on-primary"
                >
                  <span className="mt-[7px] h-[5px] w-[5px] shrink-0 bg-dv-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-2xl text-[13px] leading-[1.7] text-dv-on-primary-muted">
              Zyntia es una de las herramientas que puedo usar. Si tu negocio necesita otra
              arquitectura, la implemento a medida.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="dv-btn dv-btn-primary"
                href="https://www.zyntia.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar Zyntia
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
              <a
                className="dv-btn border-white/25 text-dv-on-primary hover:border-white/60"
                href="#contacto"
              >
                Quiero algo similar
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={100}>
            <div className="rounded-2xl border border-white/10 bg-dv-surface p-4 text-dv-ink shadow-[0_24px_60px_rgba(12,24,19,0.28)]">
              <div className="flex items-center justify-between gap-3 border-b border-dv-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-[6px] w-[6px] bg-dv-accent-line" />
                  <span className="text-[13px] font-medium">Zyntia · agentes de IA</span>
                </div>
                <span className="text-[11px] text-dv-muted">En producción</span>
              </div>

              <div className="space-y-3 py-4">
                <div className="ml-auto max-w-[88%] rounded-xl rounded-br-[4px] bg-dv-primary px-3.5 py-2.5 text-[14px] leading-[1.5] text-dv-on-primary">
                  ¿Puedo agendar una cita para el viernes?
                </div>
                <div className="max-w-[88%] rounded-xl rounded-bl-[4px] border border-dv-border bg-dv-raised px-3.5 py-2.5 text-[14px] leading-[1.5] text-dv-ink">
                  Claro. Tengo disponibilidad el viernes a las 10:00 y a las 15:30. ¿Cuál
                  prefieres?
                </div>
                <div className="max-w-[88%] rounded-xl rounded-bl-[4px] border border-dv-border bg-dv-raised px-3.5 py-2.5 text-[14px] leading-[1.5] text-dv-ink">
                  Listo, te comparto el enlace para confirmar. También puedo transferirte con
                  una persona por chat si lo necesitas.
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-dv-border pt-3">
                {[
                  ['Canal', 'Web'],
                  ['Voz', 'Activa'],
                  ['Datos', 'RAG'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-dv-raised px-2.5 py-2">
                    <p className="text-[11px] text-dv-muted">{label}</p>
                    <p className="dv-num mt-0.5 text-[13px] font-medium text-dv-ink">{value}</p>
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

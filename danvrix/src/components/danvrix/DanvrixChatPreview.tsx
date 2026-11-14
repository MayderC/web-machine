const waveBars = [8, 16, 24, 12, 30, 18, 26, 10, 22, 14, 28, 16];

export function DanvrixChatPreview() {
  return (
    <div
      className="relative mx-auto w-full max-w-md"
      role="img"
      aria-label="Vista previa de un asistente de IA respondiendo preguntas y atendiendo una llamada en tiempo real"
    >
      <div className="overflow-hidden rounded-xl border border-dv-border bg-white shadow-[0_24px_60px_rgba(11,31,58,0.12)]">
        <div className="flex items-center justify-between border-b border-dv-border bg-dv-bg px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-dv-blue" />
            <span className="font-mono text-[11px] font-bold tracking-wider text-dv-navy">
              ASISTENTE · DEMO
            </span>
          </div>
          <span className="font-mono text-[10px] font-bold tracking-wider text-dv-muted">
            EN LÍNEA
          </span>
        </div>

        <div className="space-y-4 p-5">
          <div className="ml-auto max-w-[86%] rounded-2xl rounded-br-sm bg-dv-blue px-4 py-3 text-sm leading-relaxed text-white">
            Hola, quiero saber si hacen envíos a Heredia.
          </div>

          <div className="max-w-[86%] rounded-2xl rounded-bl-sm border border-dv-border bg-white px-4 py-3 text-sm leading-relaxed text-dv-navy">
            Sí, hacemos envíos a todo Costa Rica. ¿Quieres que te comparta tiempos y costo?
          </div>

          <div className="flex w-fit items-center gap-1.5 rounded-2xl rounded-bl-sm border border-dv-border bg-white px-4 py-3">
            <span className="dv-dot h-1.5 w-1.5 rounded-full bg-dv-blue" />
            <span className="dv-dot h-1.5 w-1.5 rounded-full bg-dv-blue" />
            <span className="dv-dot h-1.5 w-1.5 rounded-full bg-dv-blue" />
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-dv-border px-4 py-3">
          <div className="flex-1 rounded-full border border-dv-border bg-dv-bg px-4 py-2 text-xs text-dv-muted">
            Escribe tu pregunta...
          </div>
          <span className="material-symbols-outlined text-[20px] text-dv-blue">send</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-dv-border bg-white p-4 shadow-[0_12px_30px_rgba(11,31,58,0.08)]">
        <div className="flex items-center gap-3">
          <span className="h-9 w-px bg-dv-blue" />
          <div>
            <p className="text-xs font-bold text-dv-navy">Llamada en tiempo real</p>
            <p className="font-mono text-[10px] font-bold tracking-wider text-dv-muted">
              00:12 · EN VIVO
            </p>
          </div>
        </div>

        <div className="flex h-8 items-end gap-0.5" aria-hidden="true">
          {waveBars.map((height, index) => (
            <span
              key={index}
              className="dv-wave-bar w-0.5 rounded-full bg-dv-blue/70"
              style={{ height: `${height}px`, animationDelay: `${index * 70}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

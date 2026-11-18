const waveBars = [8, 16, 24, 12, 30, 18, 26, 10, 22, 14, 28, 16];

export function DanvrixChatPreview() {
  return (
    <div
      className="relative mx-auto w-full max-w-md"
      role="img"
      aria-label="Vista previa de un asistente de IA respondiendo preguntas y atendiendo una llamada en tiempo real"
    >
      <div className="overflow-hidden rounded-2xl border border-dv-border bg-dv-surface shadow-[0_16px_40px_rgba(30,42,35,0.08)]">
        <div className="flex items-center justify-between border-b border-dv-border bg-dv-raised px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-[6px] w-[6px] bg-dv-accent-line" />
            <span className="text-[13px] font-medium text-dv-ink">Asistente · demo</span>
          </div>
          <span className="text-[11px] text-dv-muted">En línea</span>
        </div>

        <div className="space-y-4 p-5">
          <div className="ml-auto max-w-[86%] rounded-xl rounded-br-[4px] bg-dv-primary px-4 py-3 text-[14px] leading-[1.5] text-dv-on-primary">
            Hola, quiero saber si hacen envíos a Heredia.
          </div>

          <div className="max-w-[86%] rounded-xl rounded-bl-[4px] border border-dv-border bg-dv-raised px-4 py-3 text-[14px] leading-[1.5] text-dv-ink">
            Sí, hacemos envíos a todo Costa Rica. ¿Quieres que te comparta tiempos y costo?
          </div>

          <div className="flex w-fit items-center gap-1.5 rounded-xl rounded-bl-[4px] border border-dv-border bg-dv-raised px-4 py-3">
            <span className="dv-dot h-1.5 w-1.5 rounded-full bg-dv-muted" />
            <span className="dv-dot h-1.5 w-1.5 rounded-full bg-dv-muted" />
            <span className="dv-dot h-1.5 w-1.5 rounded-full bg-dv-muted" />
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-dv-border px-4 py-3">
          <div className="flex-1 rounded-lg border border-dv-border bg-dv-bg px-4 py-2 text-[12px] text-dv-muted">
            Escribe tu pregunta
          </div>
          <span className="material-symbols-outlined text-[18px] text-dv-muted">send</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-dv-border bg-dv-surface p-4">
        <div className="flex items-center gap-3">
          <span className="h-9 w-px bg-dv-accent-line" />
          <div>
            <p className="text-[13px] font-medium text-dv-ink">Llamada en tiempo real</p>
            <p className="dv-num text-[11px] text-dv-muted">00:12 · En vivo</p>
          </div>
        </div>

        <div className="flex h-8 items-end gap-0.5" aria-hidden="true">
          {waveBars.map((height, index) => (
            <span
              key={index}
              className="w-0.5 rounded-full bg-dv-accent-line/60"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

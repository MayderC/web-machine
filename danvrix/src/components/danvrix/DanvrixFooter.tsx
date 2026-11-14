const siteLinks = [
  ['Servicios', '#servicios'],
  ['Proyectos', '#proyectos'],
  ['Proceso', '#proceso'],
  ['Estudio', '#estudio'],
  ['Contacto', '#contacto'],
];

const projectLinks = [
  ['Zyntia', 'https://www.zyntia.ai'],
  ['Zayrel Studio', 'https://www.zayrelstudio.com/#inicio'],
  ['ColabCountry', 'https://github.com/mayderc'],
];

export function DanvrixFooter() {
  return (
    <footer className="bg-dv-navy">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a className="flex items-center gap-2.5" href="#inicio">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white font-mono text-sm font-bold text-dv-navy">
                D
              </span>
              <span className="font-sans text-lg font-extrabold tracking-tight text-white">
                Danvrix<span className="text-[#9db8d8]">.dev</span>
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#c7d6e8]">
              Desarrollo web y software a medida para pequeños negocios. Sitios,
              aplicaciones, asistentes de IA e integraciones.
            </p>
            <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#9db8d8]">
              Costa Rica · UTC-6 · Trabajo remoto
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#9db8d8]">
              Sitio
            </p>
            <ul className="mt-3 space-y-2">
              {siteLinks.map(([label, href]) => (
                <li key={href}>
                  <a className="text-sm text-[#dbe6f2] transition-colors hover:text-white" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#9db8d8]">
              Proyectos
            </p>
            <ul className="mt-3 space-y-2">
              {projectLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    className="inline-flex items-center gap-1.5 text-sm text-[#dbe6f2] transition-colors hover:text-white"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-[#9db8d8]"
              href="mailto:hola@danvrix.dev"
            >
              hola@danvrix.dev
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] font-bold tracking-wide text-[#9db8d8]">
            © 2026 Danvrix.dev · Hecho con atención al detalle.
          </p>
          <p className="font-mono text-[10px] font-bold tracking-wide text-[#9db8d8]">
            Sitios, aplicaciones y asistentes de IA a medida.
          </p>
        </div>
      </div>
    </footer>
  );
}

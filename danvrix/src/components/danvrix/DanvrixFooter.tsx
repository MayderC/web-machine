const siteLinks = [
  ['Servicios', '#servicios'],
  ['Asistentes', '#asistentes'],
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
    <footer className="bg-dv-primary">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a className="flex items-center gap-2.5" href="#inicio">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-dv-on-primary text-[13px] font-medium text-dv-primary">
                D
              </span>
              <span className="text-[17px] font-medium tracking-[-0.01em] text-dv-on-primary">
                Danvrix<span className="text-dv-on-primary-2">.dev</span>
              </span>
            </a>
            <p className="mt-4 max-w-md text-[14px] leading-[1.7] text-dv-on-primary-2">
              Desarrollo web y software a medida para pequeños negocios. Sitios,
              aplicaciones, asistentes de IA e integraciones.
            </p>
            <p className="mt-5 text-[11px] text-dv-on-primary-muted">
              Costa Rica · UTC-6 · Trabajo remoto
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] text-dv-on-primary-muted">Sitio</p>
            <ul className="mt-3 space-y-2">
              {siteLinks.map(([label, href]) => (
                <li key={href}>
                  <a
                    className="text-[14px] text-dv-on-primary-2 transition-colors hover:text-dv-on-primary"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] text-dv-on-primary-muted">Proyectos</p>
            <ul className="mt-3 space-y-2">
              {projectLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    className="inline-flex items-center gap-1.5 text-[14px] text-dv-on-primary-2 transition-colors hover:text-dv-on-primary"
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
              className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-dv-accent transition-colors hover:text-dv-on-primary"
              href="mailto:hola@danvrix.dev"
            >
              hola@danvrix.dev
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] text-dv-on-primary-muted">
            © 2026 Danvrix.dev · Hecho con atención al detalle
          </p>
          <p className="text-[11px] text-dv-on-primary-muted">
            Sitios, aplicaciones y asistentes de IA a medida
          </p>
        </div>
      </div>
    </footer>
  );
}

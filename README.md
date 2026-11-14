# Web Machine

Dos sitios independientes en un mismo repositorio:

- **`mayderc/`** — portafolio personal de MayderC (Next.js + i18n).
- **`danvrix/`** — sitio comercial de Danvrix.dev (Next.js, español).

Cada carpeta tiene su propio `package.json`, `tsconfig.json`, build y deploy. No comparten middleware, variables de entorno ni configuración de Vercel.

## Desarrollo

```bash
# MayderC
cd mayderc
npm install
npm run dev

# Danvrix
cd danvrix
npm install
npm run dev
```

También puedes usar los scripts desde la raíz:

```bash
npm run dev:mayderc
npm run dev:danvrix
npm run build:mayderc
npm run build:danvrix
```

## Deploy en Vercel

Crea dos proyectos separados desde este mismo repositorio:

| Proyecto | Root Directory | Dominio |
|---|---|---|
| MayderC | `mayderc` | `mayderc.dev` |
| Danvrix | `danvrix` | `danvrix.dev` |

No hace falta configurar el enrutamiento por dominio: cada proyecto se despliega desde su carpeta y tiene su propio build. Solo conecta el dominio correspondiente a cada proyecto cuando los tengas.

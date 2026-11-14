# Danvrix.dev

Sitio comercial de Danvrix.dev. Proyecto Next.js independiente.

## Desarrollo

```bash
cd danvrix
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Producción

```bash
npm run build
npm start
```

## Deploy

En Vercel, crea un proyecto nuevo con **Root Directory = `danvrix`**. Agrega la variable de entorno `MONGODB_URI` con la cadena de conexión completa, incluyendo el nombre de la base de datos.

Si usas la misma `MONGODB_URI` que MayderC, los mensajes se guardan en la colección compartida `contacts` con `source: "danvrix"` y aparecen en el panel de admin de MayderC. Si prefieres separarlos, usa una base de datos distinta.

El formulario de contacto envía a `/api/contact`, guarda en MongoDB y responde al usuario. No usa el cliente de correo.

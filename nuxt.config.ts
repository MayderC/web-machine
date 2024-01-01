// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "MayderC - Portafolio",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        { name: "title", content: "MayderC - Portafolio" },
        {
          name: "description",
          content:
            "Portafolio de proyectos web. Tecnologías HTML, CSS, JS, VUEJS, NUXT, NODEJS, EXPRESS",
        },

        //  <!-- Open Graph / Facebook -->
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://metatags.io/" },
        { property: "og:title", content: "MayderC - Portafolio" },
        {
          property: "og:description",
          content:
            "Portafolio de proyectos web. Tecnologías HTML, CSS, JS, VUEJS, NUXT, NODEJS, EXPRESS",
        },
        {
          property: "og:image",
          content:
            "https://raw.githubusercontent.com/MayderC/web-machine/nuxt/home.png",
        },

        //  <!-- Twitter -->
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://metatags.io/" },
        { property: "twitter:title", content: "MayderC - Portafolio" },
        {
          property: "twitter:description",
          content:
            "Portafolio de proyectos web. Tecnologías HTML, CSS, JS, VUEJS, NUXT, NODEJS, EXPRESS",
        },
        {
          property: "twitter:image",
          content:
            "https://raw.githubusercontent.com/MayderC/web-machine/nuxt/home.png",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap",
        },
      ],
    },
  },

  modules: ["@nuxt/image", "@pinia/nuxt"],

  image: {
    provider: "cloudinary",
    cloudinary: {
      baseURL: "https://res.cloudinary.com/maydercodesimages/image/upload",
    },
  },
});

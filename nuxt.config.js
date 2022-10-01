
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MayderC - Portafolio',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "title", content: "MayderC - Portafolio"},
      { name: "description", content:"Portafolio de proyectos web. Tecnologías HTML, CSS, JS, VUEJS, NUXT, NODEJS, EXPRESS"},

      //  <!-- Open Graph / Facebook -->
      {property:"og:type", content: "website"},
      {property:"og:url", content:"https://metatags.io/"},
      {property:"og:title", content:"MayderC - Portafolio"},
      {property:"og:description", content:"Portafolio de proyectos web. Tecnologías HTML, CSS, JS, VUEJS, NUXT, NODEJS, EXPRESS"},
      {property:"og:image", content:"https://raw.githubusercontent.com/MayderC/web-machine/nuxt/home.png"},

      //  <!-- Twitter -->
      {property:"twitter:card", content:"summary_large_image"},
      {property:"twitter:url", content:"https://metatags.io/"},
      {property:"twitter:title", content:"MayderC - Portafolio"},
      {property:"twitter:description", content:"Portafolio de proyectos web. Tecnologías HTML, CSS, JS, VUEJS, NUXT, NODEJS, EXPRESS"},
      {property:"twitter:image", content:"https://raw.githubusercontent.com/MayderC/web-machine/nuxt/home.png"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: ''},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap'}
    ]
  },

  /**
   * <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&display=swap" rel="stylesheet"}
   * <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
   */

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  server: {
    host: '0' // default: localhost
  },

  router: {
    mode: 'abstract'
  },

  scrollToTop: true,


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  serverMiddleware: [
    { path: "/api", handler: "~/api/index.js" },
  ],
}

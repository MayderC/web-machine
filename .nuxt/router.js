import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _588d77b2 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _24e072e9 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _69e41098 = () => interopDefault(import('../pages/Blog.vue' /* webpackChunkName: "pages/Blog" */))
const _4a6a14ec = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _c6a8fdd6 = () => interopDefault(import('../pages/ProyectDetail.vue' /* webpackChunkName: "pages/ProyectDetail" */))
const _71431b5f = () => interopDefault(import('../pages/proyects.vue' /* webpackChunkName: "pages/proyects" */))
const _191dc228 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'hash',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _588d77b2,
    name: "about"
  }, {
    path: "/admin",
    component: _24e072e9,
    name: "admin"
  }, {
    path: "/Blog",
    component: _69e41098,
    name: "Blog"
  }, {
    path: "/gallery",
    component: _4a6a14ec,
    name: "gallery"
  }, {
    path: "/ProyectDetail",
    component: _c6a8fdd6,
    name: "ProyectDetail"
  }, {
    path: "/proyects",
    component: _71431b5f,
    name: "proyects"
  }, {
    path: "/",
    component: _191dc228,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

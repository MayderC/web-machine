import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61e7a4f5 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _99e25892 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _031f5e0a = () => interopDefault(import('../pages/Blog.vue' /* webpackChunkName: "pages/Blog" */))
const _06837a3a = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _158b33e3 = () => interopDefault(import('../pages/ProyectDetail.vue' /* webpackChunkName: "pages/ProyectDetail" */))
const _38565fd1 = () => interopDefault(import('../pages/proyects.vue' /* webpackChunkName: "pages/proyects" */))
const _fcc1008c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'abstract',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _61e7a4f5,
    name: "about"
  }, {
    path: "/admin",
    component: _99e25892,
    name: "admin"
  }, {
    path: "/Blog",
    component: _031f5e0a,
    name: "Blog"
  }, {
    path: "/gallery",
    component: _06837a3a,
    name: "gallery"
  }, {
    path: "/ProyectDetail",
    component: _158b33e3,
    name: "ProyectDetail"
  }, {
    path: "/proyects",
    component: _38565fd1,
    name: "proyects"
  }, {
    path: "/",
    component: _fcc1008c,
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

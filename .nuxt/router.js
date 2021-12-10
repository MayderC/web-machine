import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f26af52 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3993d719 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _c7c93330 = () => interopDefault(import('../pages/Blog.vue' /* webpackChunkName: "pages/Blog" */))
const _0055a5c8 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _52e09576 = () => interopDefault(import('../pages/ProyectDetail.vue' /* webpackChunkName: "pages/ProyectDetail" */))
const _693b092f = () => interopDefault(import('../pages/proyects.vue' /* webpackChunkName: "pages/proyects" */))
const _0824831c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2f26af52,
    name: "about"
  }, {
    path: "/admin",
    component: _3993d719,
    name: "admin"
  }, {
    path: "/Blog",
    component: _c7c93330,
    name: "Blog"
  }, {
    path: "/gallery",
    component: _0055a5c8,
    name: "gallery"
  }, {
    path: "/ProyectDetail",
    component: _52e09576,
    name: "ProyectDetail"
  }, {
    path: "/proyects",
    component: _693b092f,
    name: "proyects"
  }, {
    path: "/",
    component: _0824831c,
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

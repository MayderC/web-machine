import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bcc0b514 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _1a725790 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _bbd66d2e = () => interopDefault(import('../pages/Blog.vue' /* webpackChunkName: "pages/Blog" */))
const _383d5e7b = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _5881b938 = () => interopDefault(import('../pages/ProyectDetail.vue' /* webpackChunkName: "pages/ProyectDetail" */))
const _3dd903b0 = () => interopDefault(import('../pages/proyects.vue' /* webpackChunkName: "pages/proyects" */))
const _7d50ff8a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _bcc0b514,
    name: "about"
  }, {
    path: "/admin",
    component: _1a725790,
    name: "admin"
  }, {
    path: "/Blog",
    component: _bbd66d2e,
    name: "Blog"
  }, {
    path: "/gallery",
    component: _383d5e7b,
    name: "gallery"
  }, {
    path: "/ProyectDetail",
    component: _5881b938,
    name: "ProyectDetail"
  }, {
    path: "/proyects",
    component: _3dd903b0,
    name: "proyects"
  }, {
    path: "/",
    component: _7d50ff8a,
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

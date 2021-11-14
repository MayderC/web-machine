import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a93b679e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _06ed0a1a = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _6054df4e = () => interopDefault(import('../pages/Blog.vue' /* webpackChunkName: "pages/Blog" */))
const _481d7b14 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _ad0e41c2 = () => interopDefault(import('../pages/ProyectDetail.vue' /* webpackChunkName: "pages/ProyectDetail" */))
const _10a19f15 = () => interopDefault(import('../pages/proyects.vue' /* webpackChunkName: "pages/proyects" */))
const _69cbb214 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'hash',
  base: '/#',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _a93b679e,
    name: "about"
  }, {
    path: "/admin",
    component: _06ed0a1a,
    name: "admin"
  }, {
    path: "/Blog",
    component: _6054df4e,
    name: "Blog"
  }, {
    path: "/gallery",
    component: _481d7b14,
    name: "gallery"
  }, {
    path: "/ProyectDetail",
    component: _ad0e41c2,
    name: "ProyectDetail"
  }, {
    path: "/proyects",
    component: _10a19f15,
    name: "proyects"
  }, {
    path: "/",
    component: _69cbb214,
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

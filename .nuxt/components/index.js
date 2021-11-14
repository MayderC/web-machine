export const BarLoading = () => import('../../components/BarLoading.vue' /* webpackChunkName: "components/bar-loading" */).then(c => wrapFunctional(c.default || c))
export const CardGithubProyects = () => import('../../components/CardGithubProyects.vue' /* webpackChunkName: "components/card-github-proyects" */).then(c => wrapFunctional(c.default || c))
export const CircleJump = () => import('../../components/CircleJump.vue' /* webpackChunkName: "components/circle-jump" */).then(c => wrapFunctional(c.default || c))
export const HandLink = () => import('../../components/HandLink.vue' /* webpackChunkName: "components/hand-link" */).then(c => wrapFunctional(c.default || c))
export const MButtonNav = () => import('../../components/MButtonNav.vue' /* webpackChunkName: "components/m-button-nav" */).then(c => wrapFunctional(c.default || c))
export const MContact = () => import('../../components/MContact.vue' /* webpackChunkName: "components/m-contact" */).then(c => wrapFunctional(c.default || c))
export const MFooter = () => import('../../components/MFooter.vue' /* webpackChunkName: "components/m-footer" */).then(c => wrapFunctional(c.default || c))
export const MHeader = () => import('../../components/MHeader.vue' /* webpackChunkName: "components/m-header" */).then(c => wrapFunctional(c.default || c))
export const MHeaderSvg = () => import('../../components/MHeaderSvg.vue' /* webpackChunkName: "components/m-header-svg" */).then(c => wrapFunctional(c.default || c))
export const MNavbar = () => import('../../components/MNavbar.vue' /* webpackChunkName: "components/m-navbar" */).then(c => wrapFunctional(c.default || c))
export const MNavbarMenu = () => import('../../components/MNavbarMenu.vue' /* webpackChunkName: "components/m-navbar-menu" */).then(c => wrapFunctional(c.default || c))
export const PhoneAnimated = () => import('../../components/PhoneAnimated.vue' /* webpackChunkName: "components/phone-animated" */).then(c => wrapFunctional(c.default || c))
export const ProyectCard = () => import('../../components/ProyectCard.vue' /* webpackChunkName: "components/proyect-card" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

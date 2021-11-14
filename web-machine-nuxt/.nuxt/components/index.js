export { default as BarLoading } from '../../components/BarLoading.vue'
export { default as CardGithubProyects } from '../../components/CardGithubProyects.vue'
export { default as CircleJump } from '../../components/CircleJump.vue'
export { default as HandLink } from '../../components/HandLink.vue'
export { default as MButtonNav } from '../../components/MButtonNav.vue'
export { default as MContact } from '../../components/MContact.vue'
export { default as MFooter } from '../../components/MFooter.vue'
export { default as MHeader } from '../../components/MHeader.vue'
export { default as MHeaderSvg } from '../../components/MHeaderSvg.vue'
export { default as MNavbar } from '../../components/MNavbar.vue'
export { default as MNavbarMenu } from '../../components/MNavbarMenu.vue'
export { default as PhoneAnimated } from '../../components/PhoneAnimated.vue'
export { default as ProyectCard } from '../../components/ProyectCard.vue'

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

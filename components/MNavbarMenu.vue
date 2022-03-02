<template lang="pug">

  ul.navbar__menu
    li( @click="test" v-for="i in items").navbar__list
      div( :class="isNavOnTop ? 'nav-menu-animation-w' : 'nav-menu-animation-b'").nav-menu-animation
      nuxt-link(:to="i.route"  :class="isNavOnTop ? 'colornavOn' : 'colornavOff'" ).navbar__link {{i.name}}

</template>
<script>
export default {
  props: {
    isNavOnTop: { type: Boolean },
  },
  data() {
    return {
      items: [
        { name: 'Home', route: '/' },
        { name: 'Projects', route: '/proyects' },
      ],
    }
  },
  methods: {
    test() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

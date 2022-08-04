<template lang="pug">

  ul.navbar__menu
    li( @click="test" v-for="i in items").navbar__list
      div( :class="isNavOnTop ? 'nav-menu-animation-w' : 'nav-menu-animation-b'").nav-menu-animation
      a(:href="i.route" style="color: inherit;" target="_blank" v-if="i.target").navbar__link {{i.name}}
      nuxt-link(:to="i.route" v-else :class="isNavOnTop ? 'colornavOn' : 'colornavOff'" ).navbar__link {{i.name}}

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
        { name: 'Blog', route: 'https://portfolio-blog-mayderc.herokuapp.com/', target: true}
      ],
    }
  },
  methods: {
    test() {
      window.scrollTo(0, 0)
      this.$emit("toggleMenu")
    },
  },
}
</script>

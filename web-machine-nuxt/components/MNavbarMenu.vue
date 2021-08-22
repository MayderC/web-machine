<template lang="pug">

  ul.navbar__menu
    li(v-for="i in items").navbar__list
      nuxt-link(:to="i.route" :class="isNavOnTop ? 'colornavOn' : 'colornavOff'" ).navbar__link {{i.name}}
      div(:class="isNavOnTop ? 'nav-menu-animation-w' : 'nav-menu-animation-b'").nav-menu-animation



</template>
<script>
export default {
  props: {
    isNavOnTop:{type: Boolean}
    },
  data(){
    return{
      items : [
        {name : "Home", route: "/"},
        {name : "About", route: "/about"},
        {name : "Gallery", route: "/gallery"},
        {name : "Blog", route: "/blog"},
        {name : "Info", route: "/info"}
      ]
    }
  }
}
</script>




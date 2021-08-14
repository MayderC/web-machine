<template lang="pug">
  
ul.navbar__menu
  li(v-for="n in name").navbar__list
    nuxt-link(:to="n.route" :class="isNavOnTop ? 'colornavOn' : 'colornavOff'" ).navbar__link {{n.name}}
    div(:class="isNavOnTop ? 'nav-menu-animation-w' : 'nav-menu-animation-b'").nav-menu-animation

</template>
<script>
export default {
  props: {
    isNavOnTop:{type: Boolean}
    },
  data(){
    return{
      name : [
        {name : "Home", route: "/"},
        {name : "About", route: "/about"},
        {name : "Gallery", route: "/gallery"},
        {name : "Info", route: "/info"}
      ]
    }
  }
}
</script>





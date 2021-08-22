<template lang="pug">

  nav.navbar(:class="[isNavOnTop ? 'navOn' : 'navOff']")
    .navbar__title
      nuxt-link(to="/" :class="isNavOnTop ? 'navbar__title-b' : 'navbar__title-w'").navbar__link-home.link MayderC 

    m-navbar-menu(
      :isNavOnTop='isNavOnTop' 
      :class="[isNavOnTop ? 'navOn' : 'navOff', isMenuOpen ? 'showMenuMovil' : 'hideMenuMovil']")

    m-button-nav(
      :isOpen = "isMenuOpen"  
      v-on:toggleOpen="show")

</template>

<script>
export default {
  data(){
    return{
      isNavOnTop: true,
      isMenuOpen: false
    }
  },

  mounted(){
     if (process.browser) {
      window.onscroll = this.onScrollNavbarColor
    }

  },

  methods: {

    onScrollNavbarColor(){
      if(window.scrollY > 95){
        this.isNavOnTop = false
      }else{
        this.isNavOnTop = true
      }
    },

    show(){
      this.isMenuOpen = !this.isMenuOpen
    }

  }

}
</script>


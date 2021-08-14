<template lang="pug">
nav.navbar(:class="[isNavOnTop ? 'navOn' : 'navOff']")
  .navbar__title
    h1 MayderC
  
  m-navbar-menu(:nombre="'May'" :isNavOnTop='isNavOnTop' :class="[isNavOnTop ? 'navOn' : 'navOff']")

</template>

<script>
export default {
  data(){
    return{
      isNavOnTop: true
    }
  }
}
</script>
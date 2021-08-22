<template lang="pug">

.boton__menu(@click="toggleOpen")



</template>

<script>
export default {

  props: {
    isOpen : Boolean
  },

  data(){
    return{
    }
  },



  methods: {

    toggleOpen(){
      this.$emit('toggleOpen')
    }

  }
}
</script>

<style lang="sass" scoped>
  @import '../static/sass/base/variables'
  .boton__menu
    width: 50px
    height: 50px
    background: #fff
    position: absolute
    top: 0 
    right: 25px
    display: none

  @media (max-width: $movil-lg)
    .boton__menu
      display: block

</style>
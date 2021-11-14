<template lang="pug">
  p.link__emoji <span style='font-size:20px;'>&#128073;</span> 
    a(:href="href" target="_blank") {{text}}
</template>

<script>
export default {
  name: 'HandLink',
  props : {
    text : { type: String, default: ''},
    href : { type: String, default: ''},
  }
}
</script>

<style lang="sass">

.link__emoji 
  color: #fff
  font-size: 17px
  text-align: center
  font-weight: bold
  cursor: pointer

.link__emoji > a
  text-decoration: none
  color: #65a6f0
  color: hiherit

</style>
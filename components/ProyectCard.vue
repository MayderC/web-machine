<template>

  <section class="card__proyect">

    <div class="card__item">
      <img :src="img" alt="">
    
    </div>
    <div class="card__footer">


        <hand-link class="card__footer__item" :href="github"  text="GitHub"></hand-link>
        <hand-link class="card__footer__item" :href="live"    text="Online"></hand-link>

    </div>

  </section>
  
</template>

<script>
export default {
  name: 'ProyectCard',
  props : {
    img : { type: String, default: ''},
    live : { type: String, default: ''},
    github : { type: String, default: ''}
  }
}
</script>

<style lang="sass">
  @import '../static/sass/base/variables'

  .card__proyect
    width: 600px
    background-color: #191919
    //border-radius: 5px
    overflow: hidden
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.5)

  .card__proyect img
    max-width: 100%

  .card__footer 
    display: flex
    justify-content: space-around
    gap: 30px
    height: 50px
    align-items: center


  @media (max-width: $movil-lg)
    .card__proyect
      width: 300px
    

</style>
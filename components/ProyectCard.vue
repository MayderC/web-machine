<template>
  <section class="card__proyect">
    <div class="card__item">
      <img :src="img" alt="" />
    </div>
    <div class="card__footer">
      <div class="text__footer">
        <p>{{ text }}</p>
      </div>
      <div class="card__footer__links">
        <hand-link
          class="card__footer__item"
          :href="github"
          text="GitHub"
        ></hand-link>
        <hand-link
          class="card__footer__item"
          :href="live"
          text="Online"
        ></hand-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProyectCard',
  props: {
    img: { type: String, default: '' },
    live: { type: String, default: '' },
    github: { type: String, default: '' },
    text: { type: String, default: '' },
  },
}
</script>

<style lang="sass">
@import '../static/sass/base/variables'

.card__proyect
  width: 600px
  background-color: #191919
  border-radius: 5px
  overflow: hidden
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.5)

.card__proyect img
  object-fit: cover
  height: 306px
  width: 600px

.card__item
  height: 306px 

.card__footer .text__footer p
  color: #D9D9D9
  font-weight: bold
  text-align: center
  margin-top: 12px


.card__footer__links
  display: flex
  justify-content: space-around
  gap: 30px
  height: 50px
  align-items: center


@media (max-width: $movil-lg)
  .card__proyect
    width: 300px

  .card__proyect img
    object-fit: cover
    height: 206px
    width: 300px

  .card__item
    height: 206px 
</style>

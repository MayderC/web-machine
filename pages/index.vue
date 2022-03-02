<template lang="pug">
main
  m-navbar
  .nav__ghost
  m-header(title="MayderC", description="Frontend Developer Jr" )


  section.about
    h2.subtitle Acerca de mi

    section.about__items
      article.about__img.about__item
        img(src="../static/img/about.svg")
      article.about__description.about__item
        p.about__text Soy un estudiante de TI "Tecnologías de información" que le gusta el desarrollo web. Estudio en la Universidad y aprendo diferentes tecnologias y lenguajes de programación.

  section.extra__section
    h2.subtitle Otros Conocimientos
    section.skills__extras
      article.skill__Nodejs.extra
        img(src="../static/img/nodejs.svg")
      article.skill__Nodejs.extra
        img(src="../static/img/express.svg")
    
      article.skill__Nodejs.extra
        img(src="../static/img/nuxt.svg")
    
      article.skill__Nodejs.extra
        img(src="../static/img/mysql-1.svg")
  
      article.skill__Nodejs.extra
        img(src="../static/img/mongodb.svg")
     

  section.contact__section
    h2.subtitle Contacto
    section.contacto__item
      m-contact
      
  m-footer



</template>

<script>
export default {

  data(){
    return {
      name : ""
    }
  }
}
</script>

<style lang="sass">
@import '../static/sass/main'
</style>

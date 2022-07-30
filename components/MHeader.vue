<template lang="pug">
  header.header
    .header__item
      h1.header__title {{title}}
      p.header__text {{description}}
    .header__img_astro
        img(src="../static/img/as.png").astro
    .header__img_p
      img(src="../static/img/fly.png").fly
    
    .header__skills
      .skills_text
        p Tecnologías principales
      .skills__items
        .skill__html.skill
          img(src="../static/img/nodejs-icon.svg")
          p Nodejs
        .skill__css.skill
          img(src="../static/img/react-2.svg")
          p Reacjs
        .skill__js.skill
          img(src="../static/img/javascript.svg")
          p JavaScript
        .skill__vue.skill
          img(src="../static/img/vue.svg")
          p Vuejs
        
    m-header-svg.header__img

</template>

<script>
export default {
  name : 'MHeader',
  props : {
    title : { type: String, default: ''},
    description : { type: String, default: ''}
  }
}
</script>
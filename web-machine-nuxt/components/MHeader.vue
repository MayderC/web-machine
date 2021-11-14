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
        p Conocimientos principales
      .skills__items
        .skill__html.skill
          img(src="../static/img/html.svg")
          p HTML
        .skill__css.skill
          img(src="../static/img/css.svg")
          p CSS
        .skill__js.skill
          img(src="../static/img/javascript.svg")
          p JavaScript
        .skill__vue.skill
          img(src="../static/img/vue.svg")
          p Vuejs
        .skill__git.skill
          img(src="../static/img/git-icon.svg")
          p Git
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
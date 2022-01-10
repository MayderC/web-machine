<template lang="pug">

 footer.footer
  .footer__text.text--top
    p dcybmay@gmail.com
  .footer__container
    a(href="https://www.youtube.com/channel/UCN6QP97Il86O08qEPE7gXvQ" target="_blank").footer__item
      img(src="../static/img/youtube-icon.svg", alt="")

    a(href="https://github.com/MayderC" target="_blank").footer__item
      img(src="../static/img/github-octocat.svg", alt="github mayderc")

    a(href="https://www.linkedin.com/in/david-cortesb/" target="_blank").footer__item
      img(src="../static/img/linkedin-icon.svg", alt="linkedin mayderc")
  .footer__text.text--bottom
    p Desarrollada por MayderC usando Nuxtjs

</template>


<style lang="sass" scoped>

  .footer
    background-color:  #f5f4fd
    margin-top: 90px
    border-top: 5px solid #2975a8

  .text--top
    text-align: center
    padding: 10px
    font-weight: bold
    font-size: 16px
  .text--bottom
    text-align: center
    padding: 10px

  .footer__container
    display: flex
    justify-content: space-evenly

  .footer__item
    width: 50px

  .footer__item > img
    max-width: 100%
    transition: .2s

  .footer__item:hover img
    transform: translateY(-6px)
    transition: .2s


</style>
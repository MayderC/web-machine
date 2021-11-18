<template lang="pug">
main
  m-navbar
  .nav__ghost
  m-header(title="Proyects", description="Mi lista de proyectos" )

  section.proyects
    h2.subtitle Mis proyectos

    article.proyects__item
      h3.subtitle-3 Proyectos en VueJs
      section.proyects__vue
        section.vue__item
          proyect-card(
            :img="task" 
            live="https://tasskapp.netlify.app/#/"
            github="https://github.com/MayderC/taskapp-frontend")

        section.vue__item
          proyect-card(
            :img="dev"
            live="https://may-devfinder.netlify.app/"
            github="https://github.com/MayderC/devfinder")

        section.vue__item
          proyect-card(
            :img="rick"
            live="https://mayderc-rick-and-morty.netlify.app/"
            github="https://github.com/MayderC/rick-morty-frontend-vue")

  
    article.proyects__item
      h3.subtitle-3 Animaciones CSS  
      hand-link(href="https://codepen.io/mayderc/pens/" text="Mi codepen Link")

      section.proyects__css
        section.css__item.anim--phone
          phone-animated
        section.css__item.anim--Jump
          circle-jump
        section.css__item.anim--loading
          bar-loading

    article.proyects__item
      h3.subtitle-3 Proyectos en Github
      hand-link(href="https://codepen.io/mayderc/pens/" text="Mi GitHub Link")
      
      
      section.proyects__github    
        card-github-proyects(v-for="d in data" :key="d.name" :repo="d")

  m-footer

</template>


<script>

import taskimg from '../static/img/task.png'
import devfinder from '../static/img/devfinder.png'
import rickMorty from '../static/img/rick.png'

import {getPercent} from '../fetch-request/github'

export default {
  name: 'Proyects',
  data(){
    return{
      task : taskimg,
      dev : devfinder,
      rick : rickMorty,
      data :[]
    }
  },
    mounted(){
     this.getData()
  },
  methods: {
  async getData() {
    const url = "https://api.github.com/users/MayderC/repos"
    try {
      const { promises, namesToPromises } = await getPercent(url)
      const infoArray = []

      Promise.all(promises).then(languages => {
        for (const i in languages) { infoArray.push({ name: namesToPromises[i], data: languages[i] }) }
        this.data = infoArray})
    } catch (error) {}
  },
  },
}
</script>
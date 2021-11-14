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
          proyect-card(:img="task")

        section.vue__item
          proyect-card(:img="dev")

        section.vue__item
          proyect-card(:img="rick")

  
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
      data :[{"name":"Bot-ChuckNorris","data":{"Python":2571}},{"name":"breadLib-api-rest","data":{"JavaScript":19229,"HTML":2777,"CSS":1072}},{"name":"devfinder","data":{"Vue":12629,"Sass":3282,"JavaScript":1018,"HTML":848}},{"name":"exchange","data":{"Vue":41013,"JavaScript":2066,"HTML":621,"CSS":94}},{"name":"gd-gx-web","data":{"JavaScript":4191,"Sass":3651,"HTML":1721}},{"name":"ip-addres-tracker","data":{"JavaScript":2391,"Pug":1804,"CSS":877}},{"name":"profile-card-component","data":{"CSS":1844,"HTML":1600}},{"name":"register-vue-component","data":{"Vue":2576}},{"name":"rick-morty-frontend-vue","data":{"Vue":11903,"JavaScript":1961,"HTML":609}},{"name":"SIGU-SA","data":{"HTML":14969,"CSS":7418,"JavaScript":5160}},{"name":"taskapp-backend","data":{"JavaScript":9162,"Shell":89}},{"name":"taskapp-frontend","data":{"Vue":21156,"JavaScript":5933,"HTML":848}},{"name":"test-front","data":{"JavaScript":8946,"HTML":4972,"CSS":2559}},{"name":"vuejs-shop-example","data":{"JavaScript":2499,"CSS":1806,"HTML":974}},{"name":"web-machine","data":{"HTML":25649,"CSS":16242,"JavaScript":10038}}]
    }
  },
    mounted(){
    //  this.getData()
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
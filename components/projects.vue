<template>
  <main id="projects">
    <div class="nav__ghost"></div>
    <section class="proyects">
      <h2  class="subtitle">Mis proyectos</h2>
      <article class="proyects__item">
        <h3  class="subtitle-3">Fullstack (Frontend y Backend)</h3>
        <section class="proyects__vue">
          <blur-effect></blur-effect>
          
          <section class="react__item">
            <proyect-card-transparent
              name="My Chat"
              :items="[
                'Javascript',
                'ReactJs',
                'API REST',
                'NodeJs',
                'Web Sockets',
                'ExpressJS',
                'SQL',
              ]"
              img="oncnritxqjf5slpgdtig"
              live="https://frosty-mayer-9c261d.netlify.app/"
              github="https://github.com/MayderC/w-chat-frontend"
              text="App chat en tiempo real version Beta"
            ></proyect-card-transparent>
          </section>
          <section class="react__item">
            <proyect-card-transparent
              name="Mind IA"
              :items="[
                'Typescript',
                'NextJs - React',
                'TailwindCSS',
                'MongoDB',
                'IA Vercel SDK',
                'Llama 3.1',
              ]"
              img='j40i2ttgxid7znmexuee'
              live="https://mind-map-ia-production.up.railway.app"
              github="https://github.com/MayderC/mind-map-ia"
              text="Aplicación de IA para realizar resumenes de texto y mapas mentales automaticos"
            ></proyect-card-transparent>
          </section>
          <section class="vue__item">
            <proyect-card-transparent
              name="LinkList"
              :items="[
                'Javascript',
                'VueJS',
                'API REST',
                'JWT Auth',
                'NodeJs',
                'ExpressJS',
                'MongoDB',
              ]"
              img="lpsudgb2hvpdb3rk2ogu"
              live="https://link-list-app.netlify.app/MayderC"
              github="https://github.com/MayderC/linklist-frontend"
              text="App para compartir los diferentes links de tus redes sociales"
            ></proyect-card-transparent>
          </section>
          <section class="vue__item">
            <proyect-card-transparent
              name="TaskList"
              :items="[
                'Javascript',
                'VueJS',
                'JWT Auth',
                'API REST',
                'NodeJs',
                'ExpressJS',
                'MongoDB',
              ]"
              img="rffswghlmyokft5acf2w"
              live="https://tasskapp.netlify.app/#/"
              github="https://github.com/MayderC/taskapp-frontend"
              text="App para guardar tu lista de tareas"
            ></proyect-card-transparent>
          </section>
          <section class="vue__item">
            <proyect-card-transparent
              name="Img uploader"
              :items="[
                'Typescript',
                'VueJS',
                'API REST',
                'NodeJs',
                'ExpressJS',
                'MongoDB',
                'MongooseODM',
              ]"
              img="eigytkinys2qvecet1ya"
              live="https://comfy-bombolone-1ac23d.netlify.app/"
              github="https://github.com/MayderC/image-uploader-fe"
              text="App subir imagenes y generar un link unico"
            ></proyect-card-transparent>
          </section>
          <section class="vue__item">
            <proyect-card-transparent
              name="My Unsplash Api"
              :items="[
                'Typescript',
                'VueJS',
                'API REST',
                'NodeJs',
                'Nest Js',
                'Swagger',
                'MongoDB',
              ]"
              img="thpq066ev25v4nkyyenj"
              live="https://stirring-frangollo-bfd933.netlify.app/"
              github="https://github.com/MayderC/my-unsplash-fe"
              text="My Unsplash Api"
            ></proyect-card-transparent>
          </section>
          <section class="vue__item">
            <proyect-card-transparent
              name="CatWiki"
              :items="[
                'Typescript',
                'VueJS',
                'API REST',
                'NodeJs',
                'Nest Js',
                'Swagger',
                'MongoDB',
              ]"
              img="us1u4ioszeixnwvqh1nn"
              live="https://phenomenal-sunshine-997127.netlify.app/"
              github="https://github.com/MayderC/cat-wiki-fe"
              text="Catwiki información de gatitos y sus razas"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="Math Game 2D"
              :items="[
                'Typescript',
                'Websockets',
                'NodeJs',
                'NestJs',
              ]"
              img="hthycfhvlylxdob5ipsz"
              live="https://operation-research-utn-2024.netlify.app/"
              github="https://github.com/MayderC/io-game-proyect-fe"
              text="Juego de matemáticas en tiempo real multijugador, sumas y restas"
            ></proyect-card-transparent>
          </section>

        </section>
      </article>

      <article class="proyects__item">
        <h3 class="subtitle-3">3D Frontend Experience</h3>
        <section class="proyects__vue">
          <blur-effect></blur-effect>

          <section class="vue__item">
            <proyect-card-transparent
              name="Solar System"
              :items="[
                'VueJS',
                'Typescript',
                'ThreeJS',
                'Blender',
                'GSAP',
                'HTML - CSS',
              ]"
              img="ec7lhrxzy655cxsgaa0y"
              live="https://solar-system-3d-vue-mayderc.netlify.app/"
              github="https://github.com/MayderC/solar-system-3D-vue"
              text="Resumen del sistema solar en 3D"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="3D Haunted House"
              :items="['Vite', 'Javascript', 'ThreeJS', 'HTML - CSS']"
              img="s41lu8lpvnt5k5gnbfc5"
              live="https://haunted-house-3d-maydec.netlify.app/"
              github="https://github.com/MayderC/haunted-house-three"
              text="Casa embrujada en 3D"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="Snake game 3D"
              :items="['Nextjs', 'Typescript', 'ThreeJS', 'HTML - CSS']"
              img="xqho7ncews54bnqkwaom"
              live="https://snake-3d-indol.vercel.app/"
              github="https://github.com/MayderC/snake-3d"
              text="Juego de la serpiente en 3D"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="Rick and Morty"
              img="gq35fltva5gl3zympmcf"
              :items="['HTML - CSS', 'Javascript', 'VueJs']"
              live="https://mayderc-rick-and-morty.netlify.app/"
              github="https://github.com/MayderC/rick-morty-frontend-vue"
              text="Modelo de Rick en 3D bailando la macarena"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="Rock paper scissors 3D game"
              :items="['Nextjs', 'Typescript', 'ThreeJS', 'Blender', 'HTML - CSS']"
              img="gwu3dztvrjqfg7s4knij"
              live="https://3d-three-paper-rock-scissors.vercel.app/"
              github="https://github.com/MayderC/3d-three-paper-rock-scissors"
              text="Juego de piedra papel o tijera en 3D"
            ></proyect-card-transparent>
          </section>

        </section>
      </article>


      <article class="proyects__item">
        <h3 class="subtitle-3">Basicos Vue and React</h3>
        <section class="proyects__vue">
          <blur-effect></blur-effect>
          <section class="react__item">
            <proyect-card-transparent
              name="Country"
              img="uzik7nxtg2qsph41nagx"
              :items="['HTML - CSS', 'Javascript', 'ReactJs']"
              live="https://blissful-easley-831ea3.netlify.app/"
              github="https://github.com/MayderC/countries-practice-react"
              text="App con la información de los diferentes paises del mundo. frontend"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="Devfinder"
              img="b6hlrlizvxdhky4u6w6r"
              :items="['HTML - CSS', 'Javascript', 'VueJS']"
              live="https://may-devfinder.netlify.app/"
              github="https://github.com/MayderC/devfinder"
              text="App para buscar perfiles de usuarios en github"
            ></proyect-card-transparent>
          </section>
          <section class="vue__item">
            <proyect-card-transparent
              name="Exchange"
              img="wixgeoij1mtfrmacaxpu"
              :items="['HTML - CSS', 'Javascript', 'VueJS']"
              live="https://mayder-exchange-app.netlify.app/"
              github="https://github.com/MayderC/devfinder"
              text="App"
            ></proyect-card-transparent>
          </section>
        </section>
      </article>

      <article class="proyects__item">
        <h3 class="subtitle-3">Colaboraciones Fullstack</h3>
        <section class="proyects__vue">
          <blur-effect></blur-effect>
          <section
          v-motion
          :initial="{
            y: 100,
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          }"
          :enter="{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }"
          class="vue__item" v-for="d in col" :key="d.name">
            <proyect-card-transparent
              @receive="sort"
              :name="d.name"
              :items="d.items"
              :img="d.img"
              :live="d.live"
              :github="d.github"
              :text="d.text"
            ></proyect-card-transparent>
          </section>
          
        </section>
      </article>

      <article ref="githubProjects" class="proyects__item">
        <h3 class="subtitle-3">Animaciones CSS</h3>
        <hand-link
          href="https://codepen.io/mayderc/pens/"
          text="Mi codepen Link"
        ></hand-link>
        <section class="proyects__css">
          <section class="css__item anim--phone">
            <phone-animated></phone-animated>
          </section>
          <section class="css__item anim--Jump">
            <circle-jump></circle-jump>
          </section>
          <section class="css__item anim--loading">
            <bar-loading></bar-loading>
          </section>
        </section>
      </article>
        <article ref="githubProjects" class="proyects__item">
          <h3 class="subtitle-3">Proyectos en Github</h3>
          <hand-link
            href="https://github.com/MayderC"
            text="Mi GitHub Link"
          ></hand-link>
          <section class="proyects__github">
            <card-github-proyects
              v-for="d in visibleData"
              :key="d.name"
              :repo="d"
            ></card-github-proyects>
          </section>
          <div v-show="visibleData.length &lt;=  countProyects">
            <p class="show-repos" @click="showAllProyects">
              show all repositories
            </p>
          </div>
        </article>
    </section>
  </main>
</template>

<script>
import { getPercent } from "../fetch-request/github";
import {collaboratives} from '../fetch-request/proyects.js'
import {filter} from '../helper/filter.js'

export default {
  name: "Proyects",
  data() {
    return {
      initial : {
        y: 100,
        opacity: 0,
      },
      enter : {
        y: 0,
        opacity: 1,
      },
      data: [],
      visibleData: [],
      countProyects: 8,
      col: collaboratives
    };
  },
  mounted() {
    this.setupObserver()
  },
  methods: {

    sort(str= '') {
      const result = filter(this.col, (item) => item.items.includes(str))
      this.col = result
    },
    async getData() {
      if (this.data.length) return;

      const url = "https://api.github.com/users/MayderC/repos";
      try {
        const { promises, namesToPromises } = await getPercent(url);
        const infoArray = [];
        Promise.all(promises).then((languages) => {
          for (const i in languages) {
            infoArray.push({ name: namesToPromises[i], data: languages[i] });
          }
          this.data = infoArray;
          this.visibleData = this.data.splice(0, this.countProyects);
        });
      } catch (error) {}
    },
    showAllProyects() {
      this.visibleData = JSON.parse(JSON.stringify(this.data));
    },
    onIntersect(entries){
      entries.forEach(entry => {
        if(entry.isIntersecting){
          this.getData()
          console.log('Intersecting ', entry)
        }
      })
    },
    setupObserver(){
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
      const observer = new IntersectionObserver(this.onIntersect, options)
      observer.observe(this.$refs.githubProjects)
    }
  },
};
</script>

<style lang="scss" scoped>
.link_github {
  padding: 30px;
}

.detailt_item {
  width: 600px;
}
.show-repos {
  color: rgb(146, 202, 255);
  text-align: center;
  font-weight: bold;
  margin-top: 50px;
  cursor: pointer;
}
</style>

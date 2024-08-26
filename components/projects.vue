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
              :img="chat"
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
              img='https://github.com/MayderC/mind-map-ia/blob/main/home.png?raw=true'
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
              :img="link"
              live="https://fierce-lowlands-38911.herokuapp.com/"
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
              :img="task"
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
              :img="uploader"
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
              :img="unsplash"
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
              :img="catwiki"
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
              :img="ioGame"
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
              :img="solarSystem"
              live="https://solar-system-3d-vue-mayderc.netlify.app/"
              github="https://github.com/MayderC/solar-system-3D-vue"
              text="Resumen del sistema solar en 3D"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="3D Haunted House"
              :items="['Vite', 'Javascript', 'ThreeJS', 'HTML - CSS']"
              :img="houseH"
              live="https://haunted-house-3d-maydec.netlify.app/"
              github="https://github.com/MayderC/haunted-house-three"
              text="Casa embrujada en 3D"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="Snake game 3D"
              :items="['Nextjs', 'Typescript', 'ThreeJS', 'HTML - CSS']"
              :img="snakeG"
              live="https://snake-3d-indol.vercel.app/"
              github="https://github.com/MayderC/snake-3d"
              text="Juego de la serpiente en 3D"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="Rick and Morty"
              :img="rick"
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
              :img="rpsGame"
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
              :img="countryimg"
              :items="['HTML - CSS', 'Javascript', 'ReactJs']"
              live="https://blissful-easley-831ea3.netlify.app/"
              github="https://github.com/MayderC/countries-practice-react"
              text="App con la información de los diferentes paises del mundo. frontend"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="Devfinder"
              :img="dev"
              :items="['HTML - CSS', 'Javascript', 'VueJS']"
              live="https://may-devfinder.netlify.app/"
              github="https://github.com/MayderC/devfinder"
              text="App para buscar perfiles de usuarios en github"
            ></proyect-card-transparent>
          </section>
          <section class="vue__item">
            <proyect-card-transparent
              name="Exchange"
              img="https://raw.githubusercontent.com/MayderC/exchange/main/home.png"
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

          <section class="vue__item">
            <proyect-card-transparent
              name="MoveNow"
              :items="['VueJS', 'Typescript', 'Java', 'API REST', 'HTML - CSS']"
              :img="movenow"
              live="https://movenow-three.vercel.app/"
              github="https://github.com/No-Country/s9-08-t-java-vue"
              text="Movenow, colaboración en No country, Mudanzas y envios"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="Calountry"
              :items="[
                'VueJS',
                'Nest Js ',
                'Typescript',
                'NodeJs',
                'API REST',
                'HTML - CSS',
              ]"
              :img="calountry"
              live="https://github.com/No-Country/C8-39-T-Vue"
              github="https://github.com/No-Country/C8-39-T-Vue"
              text="Encuentra la hora ideal para reuniones en equipos, y Agenda de tareas"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="Donafunding"
              :items="['VueJS', 'Nest Js', 'NodeJs', 'API REST', 'HTML - CSS']"
              :img="donafunding"
              live="https://github.com/No-Country/s6-08-t-vue"
              github="https://github.com/No-Country/s6-08-t-vue"
              text="Donafunding, colaboración en No country, Donar e invertir en proyectos"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="Devsarrolla IT"
              :items="['VueJS', 'Nest Js', 'NodeJs', 'API REST', 'HTML - CSS']"
              :img="devsarrolla"
              live="https://github.com/No-Country/s7-19-t-nodevue"
              github="https://github.com/No-Country/s7-19-t-nodevue"
              text="App para encontrar proyectos de desarrollo colaborativos"
            ></proyect-card-transparent>
          </section>

          <section class="vue__item">
            <proyect-card-transparent
              name="EarthPoints"
              :items="['React', 'Typescript', 'Nestjs', 'REST & GraphQL']"
              img="https://camo.githubusercontent.com/a464abe0531fc8ecbb07b26136c6d20b6d0a7043d7395201ade388fd88f50de3/68747470733a2f2f692e696d6775722e636f6d2f5630795774396d2e706e67"
              live="https://earthpoints.vercel.app/"
              github="https://github.com/No-Country/s11-20-m-typescript-react"
              text="Incentiva tus hábitos a través de la acumulación de puntos"
            ></proyect-card-transparent>
          </section>
          <section class="vue__item">
            <proyect-card-transparent
              name="MentorSphere"
              :items="['React', 'Typescript', 'Nestjs', 'REST']"
              :img="mentor"
              live="https://mentorsphere.vercel.app/"
              github="https://github.com/No-Country/s12-21-tn-nest-react"
              text="Plataforma que conecta a mentores y estudiantes para fomentar el aprendizaje y el crecimiento personal"
            ></proyect-card-transparent>
          </section>
          <section class="vue__item">
            <proyect-card-transparent
              name="RoundPeople"
              :items="['React', 'Javascript', 'NodeJs', 'REST API']"
              :img="round"
              live="https://roundpeople.netlify.app/"
              github="https://github.com/No-Country/s13-01-m-node-react"
              text="Una plataforma que te ayuda a derribar las limitaciones y alcanzar tus metas musicales."
            ></proyect-card-transparent>
          </section>
        </section>
      </article>

      <article class="proyects__item">
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
import taskimg from "~/assets/img/task.webp";
import devfinder from "~/assets/img/devfinder.png";
import dona from "~/assets/img/crow.webp";
import rickMorty from "~/assets/img/rick.webp";
import linklist from "~/assets/img/link.png";
import country from "~/assets/img/country.webp";
import chatpng from "~/assets/img/chat.png";
import upload from "~/assets/img/uploader.png";
import unsp from "~/assets/img/unsplash.webp";
import cat from "~/assets/img/catwiki.webp";
import calo from "~/assets/img/calountry.png";
import devti from "~/assets/img/devsarrolla.webp";
import move from "~/assets/img/movenow.webp";
import mentorS from "~/assets/img/mentor.webp";
import roundP from "~/assets/img/round.webp";
import solar from "~/assets/img/solar.png";
import snake from "~/assets/img/snake.webp";
import house from "~/assets/img/house.webp";
import rps from "~/assets/img/rpsgame.webp";
import iogame from "~/assets/img/iogame.png";

import { getPercent } from "../fetch-request/github";

export default {
  name: "Proyects",
  data() {
    return {
      ioGame: iogame,
      rpsGame: rps,
      houseH: house,
      snakeG: snake,
      mentor: mentorS,
      round: roundP,
      devsarrolla: devti,
      donafunding: dona,
      calountry: calo,
      chat: chatpng,
      catwiki: cat,
      task: taskimg,
      dev: devfinder,
      rick: rickMorty,
      link: linklist,
      countryimg: country,
      uploader: upload,
      unsplash: unsp,
      movenow: move,
      solarSystem: solar,
      data: [],
      visibleData: [],
      countProyects: 8,
    };
  },
  mounted() {
    this.setupObserver()
  },
  methods: {
    async getData() {
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

<template>
  <main>
    <m-navbar></m-navbar>
    <div class="nav__ghost"></div>
    <section class="proyects">
      <h2 class="subtitle">Mis proyectos</h2>
      <article class="proyects__item">
        <h3 class="subtitle-3">Fullstack (Frontend y Backend)</h3>
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
        </section>
      </article>
      <article class="proyects__item">
        <h3 class="subtitle-3">Frontend Vue and React</h3>
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
              name="Rick and Morty"
              :img="rick"
              :items="['HTML - CSS', 'Javascript', 'VueJs']"
              live="https://mayderc-rick-and-morty.netlify.app/"
              github="https://github.com/MayderC/rick-morty-frontend-vue"
              text="App con la información de los personajes de Rick and Morty"
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
        <h3 class="subtitle-3">Colaboraciones</h3>
        <section class="proyects__vue">
          <blur-effect></blur-effect>
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
              text="Calountry, colaboración en No country, Encuentra la hora ideal para reuniones en equipos de colaboradores, y Agenda de tareas"
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
      <article class="proyects__item">
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
import { getPercent } from "../fetch-request/github";

export default {
  name: "Proyects",
  data() {
    return {
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
      data: [],
      visibleData: [],
      countProyects: 8,
    };
  },
  mounted() {
    this.getData();
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

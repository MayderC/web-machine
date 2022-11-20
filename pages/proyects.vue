<template>
  <main>
    <m-navbar></m-navbar>
    <div class="nav__ghost"></div>
    <section class="proyects">
      <h2 class="subtitle">Mis proyectos</h2>
      <article class="proyects__item">
        <h3 class="subtitle-3">Fullstack (Frontend y Backend)</h3>
        <section class="proyects__vue">
          <section class="react__item">
            <proyect-card
              :items="[
                'HTML - CSS',
                'Javascript',
                'ReactJs',
                'API REST',
                'JWT Auth',
                'NodeJs',
                'Web Sockets',
                'ExpressJS',
                'PostgresSQL',
                'Sequelize ORM',
              ]"
              :img="chat"
              live="https://frosty-mayer-9c261d.netlify.app/"
              github="https://github.com/MayderC/w-chat-frontend"
              text="App chat en tiempo real version Beta"
            ></proyect-card>
          </section>
          <section class="vue__item">
            <proyect-card
              :items="[
                'HTML - CSS',
                'Javascript',
                'VueJS',
                'API REST',
                'JWT Auth',
                'NodeJs',
                'ExpressJS',
                'MongoDB',
                'MongooseODM',
              ]"
              :img="link"
              live="https://fierce-lowlands-38911.herokuapp.com/"
              github="https://github.com/MayderC/linklist-frontend"
              text="App para compartir los diferentes links de tus redes sociales"
            ></proyect-card>
          </section>
          <section class="vue__item">
            <proyect-card
              :items="[
                'HTML - CSS',
                'Javascript',
                'VueJS',
                'JWT Auth',
                'API REST',
                'NodeJs',
                'ExpressJS',
                'MongoDB',
                'MongooseODM',
              ]"
              :img="task"
              live="https://tasskapp.netlify.app/#/"
              github="https://github.com/MayderC/taskapp-frontend"
              text="App para guardar tu lista de tareas"
            ></proyect-card>
          </section>
          <section class="vue__item">
            <proyect-card
              :items="[
                'HTML - CSS',
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
            ></proyect-card>
          </section>
          <section class="vue__item">
            <proyect-card
              :items="[
                'HTML - CSS',
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
            ></proyect-card>
          </section>
          <section class="vue__item">
            <proyect-card
              :items="[
                'HTML - CSS',
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
            ></proyect-card>
          </section>
        </section>
      </article>
      <article class="proyects__item">
        <h3 class="subtitle-3">Frontend Vue and React</h3>
        <section class="proyects__vue">
          <section class="react__item">
            <proyect-card
              :img="countryimg"
              :items="['HTML - CSS', 'Javascript', 'ReactJs']"
              live="https://blissful-easley-831ea3.netlify.app/"
              github="https://github.com/MayderC/countries-practice-react"
              text="App con la información de los diferentes paises del mundo. frontend"
            ></proyect-card>
          </section>
          <section class="vue__item">
            <proyect-card
              :img="rick"
              :items="['HTML - CSS', 'Javascript', 'VueJs']"
              live="https://mayderc-rick-and-morty.netlify.app/"
              github="https://github.com/MayderC/rick-morty-frontend-vue"
              text="App con la información de los personajes de Rick and Morty"
            ></proyect-card>
          </section>
          <section class="vue__item">
            <proyect-card
              :img="dev"
              :items="['HTML - CSS', 'Javascript', 'VueJS']"
              live="https://may-devfinder.netlify.app/"
              github="https://github.com/MayderC/devfinder"
              text="App para buscar perfiles de usuarios en github"
            ></proyect-card>
          </section>
          <section class="vue__item">
            <proyect-card
              img="https://raw.githubusercontent.com/MayderC/exchange/main/home.png"
              :items="['HTML - CSS', 'Javascript', 'VueJS']"
              live="https://mayder-exchange-app.netlify.app/"
              github="https://github.com/MayderC/devfinder"
              text="App "
            ></proyect-card>
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
          <div v-show="visibleData.length &lt;=  countProyects">
            <p class="show-repos" @click="showAllProyects">
              show all repositories
            </p>
          </div>
        </section>
      </article>
    </section>
  </main>
</template>

<script>
import taskimg from "~/assets/img/task.png";
import devfinder from "~/assets/img/devfinder.png";
import rickMorty from "~/assets/img/rick.png";
import linklist from "~/assets/img/link.png";
import country from "~/assets/img/country.png";
import chatpng from "~/assets/img/chat.png";
import upload from "~/assets/img/uploader.png";
import unsp from "~/assets/img/unsplash.png";
import cat from "~/assets/img/catwiki.png";

import { getPercent } from "../fetch-request/github";

export default {
  name: "Proyects",
  data() {
    return {
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

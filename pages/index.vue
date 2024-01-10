<template>
  <main class="main_index" id="main_scroll">
    <m-navbar class="nav__ghost"></m-navbar>
    <section class="header">
      <m-header title="MayderC" description="Software developer"></m-header>
      <canvas id="three"></canvas>
    </section>
    <section class="about">
      <h2 class="subtitle">Acerca de mi</h2>
      <section class="about__items">
        <article class="about__img about__item">
          <nuxt-img 
            provider="cloudinary"
            src="/v1704122883/Portfolio/img/plszt3knfrjr9kvzdicn.svg"
          ></nuxt-img>
        </article>
        <article class="about__description about__item">
          <p class="about__text">
            Mi nombre es Mayder, poseo Diplomado en Tecnologías de
            información, tengo conocimiento en desarrollo frontend y backend, principalmente con Typescript.
          </p>
        </article>
      </section>
    </section>

    <section class="extra__section">
      <h2 class="subtitle">Otras Tecnologías</h2>
      <section class="skills__extras">
        <article class="skill__Nodejs extra">
          <img src="../assets/img/spring.webp" />
        </article>

        <article class="skill__Nodejs extra">
          <img src="../assets/img/mysql-1.svg" />
        </article>
        <article class="skill__Nodejs extra">
          <img src="../assets/img/postgresql.svg" />
        </article>
        <article class="skill__Nodejs extra">
          <img src="../assets/img/mongodb.svg" />
        </article>
      </section>
    </section>
    <section class="contact__section">
      <h2 class="subtitle">Contacto</h2>
      <section class="contacto__item">
        <m-contact></m-contact>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";
import { Scene, AmbientLight, Clock, AnimationMixer, DirectionalLight } from 'three'
import { Camera } from "../three/init/Camera";
import { Render } from "../three/init/Render";
import { PlanetModel } from "~/three/objects/PlanetModel";


const scroll = ref(0)


const scrollAnimation = () => {
  window.addEventListener('scroll', () => {
    
    const scrollPercent = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    
    scroll.value = Math.round(scrollPercent * 100)
    console.log(scroll.value)
  })
}




onMounted(async() => {

  const scene = new Scene();
  const camera = new Camera();
  const ambientLight = new AmbientLight(0xffffff, 2);
  scene.add(ambientLight);

  new Render({scene, camera, canvas: '#three'});

  scrollAnimation()

  const model = await new PlanetModel().loadModel()

  const updateModel = () => {
    model.children[0].children[0].children[0].children[0].rotation.y +=  0.002;
    model.children[0].children[0].children[0].children[0].rotation.x +=  0.002;
    camera.position.z = Math.sin( (100 - scroll.value) * 0.01) * 10;
    camera.lookAt(model.position);
    requestAnimationFrame(updateModel)
  }


  updateModel()


  scene.position.set(0, -1, 0);
  scene.add(model)

});




</script>

<style lang="scss">
@import "../assets/scss/main.scss";

.about,
.extra__section,
.contact__section,
section.header {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.contact__section {
  min-height: 60vh;
}

#three {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}


.about__img{
  height: 300px;
}
</style>

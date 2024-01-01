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
          <img src="../assets/img/about.svg" />
        </article>
        <article class="about__description about__item">
          <p class="about__text">
            Mi nombre es Mayder soy desarrollador,  poseo Diplomado en Tecnologías de
            información, me dedico al desarrollo frontend y backend, principalmente con Typescript.
          </p>
        </article>
      </section>
    </section>

    <section class="extra__section">
      <h2 class="subtitle">Otras Tecnologías</h2>
      <section class="skills__extras">
        <article class="skill__Nodejs extra">
          <img src="../assets/img/nestjs.webp" />
        </article>
        <article class="skill__Nodejs extra">
          <img src="../assets/img/express.svg" />
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

import { onMounted } from "vue";
import { Scene, AmbientLight } from 'three'
import { Camera } from "../three/init/Camera";
import { Render } from "../three/init/Render";
import { PlanetModel } from "~/three/objects/PlanetModel";
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'



onMounted(() => {
  console.log("mounted");

  const scene = new Scene();
  const camera = new Camera();
  const ambientLight = new AmbientLight(0xffffff, );
  
  
  
  scene.add(ambientLight);

  const render = new Render({scene, camera, canvas: '#three'});
  // const controls = new OrbitControls(camera, render.domElement)
  // controls.enableZoom = false;
  // controls.enablePan = false;
  // controls.enableDamping = true;

  new PlanetModel().loadModel().then((model) => {
    console.log(model);
    scene.position.set(0, -1, 0);
    scene.add(model)
    render.addFunctionToExecute(() => {
      model.children[0].children[0].children[0].children[0].rotation.y += 0.005;
      model.children[0].children[0].children[0].children[0].rotation.x += 0.003;
    }, 'rotation')

  })


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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>

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
import { handleAvatarAnimation } from '../three/objects/avatar.animation'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Loader } from "~/three/tools/Loader";


const scroll = ref(0)




const addScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(null, {
    scrollTrigger: {
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        scroll.value = self.progress * 100
        console.log(scroll.value)
      }
    },
  })
}


onMounted(async() => {

  const dirLight = new DirectionalLight('#0093E9', 1);
  const clock = new Clock();
  const scene = new Scene();
  const camera = new Camera();
  const ambientLight = new AmbientLight(0xffffff, 2);
  
  scene.add(ambientLight);

  const render = new Render({scene, camera, canvas: '#three'});


  addScrollAnimation()

  const model = await new PlanetModel().loadModel()

  const helloAnimation = await new FBXLoader().loadAsync('/3d/animations/Typing.fbx')


  const avatar = await new Loader().loadModel('/glb/avatar.glb')


  dirLight.position.set(0, 0, 10)
  dirLight.lookAt(avatar.position)
  scene.add(dirLight)
  avatar.userData.animations = helloAnimation.animations[0]
  avatar.rotation.y = 1
  scene.add(avatar)

  const mixer = new AnimationMixer(avatar)
  const action = mixer.clipAction(avatar.userData.animations)
  action.play()

  scene.position.set(0, -1, 0);
  scene.add(model)

  render.addFunctionToExecute(() => {
    model.children[0].children[0].children[0].children[0].rotation.y += 0.005;
    model.children[0].children[0].children[0].children[0].rotation.x += 0.003;
    model.position.y = scroll.value * 0.1
  }, 'planet')

  render.addFunctionToExecute(() => {
    mixer.update(clock.getDelta())
    handleAvatarAnimation(avatar, scene, scroll.value)
  }, 'avatar')



  






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

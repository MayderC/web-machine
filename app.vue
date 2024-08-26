<template>
  <main class="container">
    <NuxtPage />
    <MFooter></MFooter>
    <canvas id="three"></canvas>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Scene, AmbientLight} from "three";
import { Camera } from "./three/init/Camera";
import { Render } from "./three/init/Render";
import { PlanetModel } from "~/three/objects/PlanetModel";
import { addRaycasterRotation } from "./three/helpers/addRaycasterRotationPlanet";
import BackgroundWaves from "./three/objects/backgroundWaves";
import BackgroundShader from "./three/objects/backgroundShader";
import { loadVueIcon } from "./three/objects/icons/vueIcon";
import * as THREE from "three";
import { loadReactIcon } from "./three/objects/icons/reactIcon";


const scroll = ref(0);


const scrollAnimation = () => {
  window.addEventListener("scroll", () => {
    const scrollPercent =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);
    scroll.value = Math.round(scrollPercent * 100);
  });
};


onMounted(async () => {
  const scene = new Scene();
  const camera = new Camera();
  const render = new Render({ scene, camera, canvas: "#three" });
  const ambientLight = new AmbientLight(0xffffff, 2);
  const plane = new BackgroundWaves();
  //const background = new BackgroundShader();
  
  loadVueIcon(scene);
  //loadReactIcon(scene);
  
  scene.add(ambientLight);
  //background.animatePlane()
  plane.animatePlane();

  // const axesHelper = new THREE.AxesHelper( 5 );
  // scene.add( axesHelper );
  

  scrollAnimation();
  const {model, group} = await new PlanetModel().loadModel();
  const updateModel = () => {
    model.children[0].children[0].children[0].children[0].rotation.y //+= 0.002;
    model.children[0].children[0].children[0].children[0].rotation.x //+= 0.002;
    camera.position.z = Math.sin((100 - scroll.value / 2) * 0.01) * 10;
    requestAnimationFrame(updateModel);
  };

  updateModel();

  scene.position.set(0, -1, 0);
  scene.add(plane.getPlane())
  //scene.add(background.getPlane())  
  scene.add(group);
  
  addRaycasterRotation(camera, render, model, scene);
});
</script>

<style>
.container {
  position: relative;
  overflow: hidden;
}

#three {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
</style>

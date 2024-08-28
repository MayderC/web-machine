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
import { gsap } from 'gsap';
import { animateObjectEntry } from "./three/helpers/objectEntry";


const scroll = ref(0);



const registerWebworker = async (scene: any, camera: any, render: any) => {
  const worker = new Worker(new URL("./webworker.js", import.meta.url), {type: "module"});

  worker.addEventListener("message", async (event) => {
    const { data } = event;
    const { positionArray, normalArray, uvArray, materialData, indexArray } = data;
    const model = await createMeshFromBuffer(positionArray, normalArray, uvArray, indexArray, materialData);
    if (!model) return;
    model.position.set(0, 1, 0);
    const plane = new BackgroundWaves();
    plane.animatePlane();
    plane.getPlane().scale.set(0, 0, 0);
    scene.add(plane.getPlane());
    const updateModel = () => {
      model.rotation.y += 0.002;
      model.rotation.x += 0.002;
      camera.position.z = Math.sin((100 - scroll.value / 2) * 0.01) * 10;
      requestAnimationFrame(updateModel);
    };
    updateModel();
    scene.add(model);
    //loadVueIcon(scene);
    animateObjectEntry(model);
    animateObjectEntry(plane.getPlane());
  });
  worker.postMessage('start');
}


const loadTexture = (url:string) => {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      (texture) => {
        texture.mapping = THREE.UVMapping;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
        texture.offset.set(0, 0);
        texture.center.set(0, 0);
        texture.rotation = 0;
        texture.minFilter = THREE.LinearMipMapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.anisotropy = 1;
        texture.flipY = false;
        texture.generateMipmaps = true;
        texture.premultiplyAlpha = false;
        texture.unpackAlignment = 4;
        texture.encoding = THREE.sRGBEncoding;
        resolve(texture);
      },
      undefined,
      (error) => {
        reject(error);
      }
    );
  });
};


const createMeshFromBuffer = async(vertexData: any, normalData: any, uvData: any, indexArray: any, materialData: any) => {
  const floatArray = new Float32Array(vertexData);
  const normalArray = new Float32Array(normalData);
  const uvArray = new Float32Array(uvData)

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(floatArray, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normalArray, 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvArray, 2));
  geometry.setIndex(new THREE.BufferAttribute(indexArray, 1));

  try {
    const texture = await loadTexture('/textures/Planet_baseColor.png');
    const material = new THREE.MeshStandardMaterial({
      ...materialData,
      map: texture,
      side: THREE.FrontSide,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData = { name: 'Object_Planet_0' };
    mesh.name = 'Object_Planet_0';
    mesh.position.set(0, 0, 0);
    mesh.scale.set(0, 0, 0);
    return mesh;
  } catch (error) {
    console.error('Error loading texture:', error);
    return null;
  }
};

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
  
  scene.add(ambientLight);
  scene.position.set(0, -1, 0);
  registerWebworker(scene, camera, render);

  scrollAnimation();

});
</script>

<style>
.container {
  position: relative;
  overflow: hidden;
}

#three {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
</style>

import { Loader } from "../tools/Loader";
import * as THREE from "three";

export class PlanetModel {
  loader = new Loader();
  
  constructor() {
    this.url = "/glb/planet.glb";
    this.model = null
    this.group = new THREE.Group();
  }
  async loadModel() {
    const model = await this.loader.loadModel(this.url);
    this.model = model;
    this.group.add(model);
    this.animate();
    return { model: this.model, group: this.group };
  }

  animate() {

    const clock = new THREE.Clock();

    const animateGroup = () => {
      const time = clock.getElapsedTime();
      // move on the x axis, with sin function
      this.group.position.y = Math.sin(time) * 0.3;
      console.log(this.group.position.x)
      requestAnimationFrame(animateGroup);
    }

    animateGroup(); 

  }


}

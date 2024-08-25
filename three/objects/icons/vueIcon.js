import { svgPathsTo3dMesh } from "~/three/helpers/svgPathsTo3dMesh";
import { getSvgModel } from "~/three/tools/Loader"
import * as THREE from "three";



export const loadVueIcon = async(scene) => {
  const modelPath = await getSvgModel('/icons/vue.svg');
  const model3d = svgPathsTo3dMesh(modelPath);
  initVueProperties(model3d);
  //scene.add(addHelpers(model3d));
  animateVueIcon(model3d);
  scene.add(model3d);
}


const initVueProperties = (model) => {
  model.rotation.set(0, 0, Math.PI*-0.5);
  model.scale.set(0.001, 0.001, 0.001);
  model.renderOrder = 1;
  model.position.set(0,1.2,4);
  return model;
}


const addHelpers = (model) => {
  const box = new THREE.BoxHelper( model, 0xffff00 );
  return box;
}



const animateVueIcon = (model) => {
  //move cons on axis x and z to create a circular movement
  const clock = new THREE.Clock();
  const animate = () => {
    const time = clock.getElapsedTime();
    model.position.x = Math.sin(time) * 1.5;
    model.position.z = Math.cos(time) * 1.5;
     //ROTATE ON THE Y AXIS ON THE OF THE CIRCUMLAR MOVEMENT
     const angle = Math.atan2(Math.cos(time), Math.sin(time));
     model.rotation.y = angle + Math.PI * -0.5;
    requestAnimationFrame(animate);
  }
  animate();

}
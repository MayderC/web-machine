import { svgPathsTo3dMesh } from "~/three/helpers/svgPathsTo3dMesh";
import { getSvgModel } from "~/three/tools/Loader"
import * as THREE from "three";



export const loadReactIcon = async(scene) => {
  const modelPath = await getSvgModel('/icons/react.svg');
  const model3d = svgPathsTo3dMesh(modelPath);
  initReactProperties(model3d);
  scene.add(addHelpers(model3d));
  animateReactIcon(model3d);  
  scene.add(model3d);
}


const initReactProperties = (model) => {
  model.rotation.set(0, 0, Math.PI*-0.5);
  model.scale.set(0.001, 0.001, 0.001);
  model.position.set(0,0,0);
  model.renderOrder = 1;
  return group;
}


const addHelpers = (model) => {
  const box = new THREE.BoxHelper( model, 0xffff00 );
  return box;
}



const animateReactIcon = (model) => {
  //move cons on axis x and z to create a circular movement
  const clock = new THREE.Clock();
  const animate = () => {
    const time = clock.getElapsedTime();
    model.position.z = Math.sin(time) * 1;
    model.position.y = Math.cos(time) * 1;
     //ROTATE ON THE Y AXIS ON THE OF THE CIRCUMLAR MOVEMENT
     const angle = Math.atan2(Math.cos(time), Math.sin(time));
     //model.rotation.x = angle + Math.PI * -0.5;
    requestAnimationFrame(animate);
  }
  animate();

}
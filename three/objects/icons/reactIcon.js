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
  model.renderOrder = 1;
  model.position.set(0,3,4);
  return model;
}


const addHelpers = (model) => {
  const box = new THREE.BoxHelper( model, 0xffff00 );
  return box;
}



const animateReactIcon = (model) => {
  //move cons on axis x and z to create a circular movement
  const animate = () => {
     model.rotation.y += 0.01;
    requestAnimationFrame(animate);
  }
  animate();

}
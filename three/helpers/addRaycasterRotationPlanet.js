import {  Object3D, Raycaster, Vector2 } from "three";

export const addRaycasterRotation = (
  camera,
  render,
  model,
  scene
) => {
  const raycaster = new Raycaster();
  const mouse = new Vector2();

  const object =
    model.children[0].children[0].children[0].children[0].children[0];

  let clickedFlag = false;
  let clickedObject = null;
  const mouseDownPosition = { x: 0, y: 0 };

  document.addEventListener("mousedown", (event) => {
    clickedFlag = true;
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0 && clickedFlag) {
      clickedObject = intersects[0].object;
    }

    mouseDownPosition.x = event.clientX;
    mouseDownPosition.y = event.clientY;
  });

  document.addEventListener("mouseup", () => {
    clickedObject = null;
    clickedFlag = false;
  });

  document.addEventListener("mousemove", (event) => {
    if (clickedFlag && clickedObject === object) {
      const deltaX = event.clientX - mouseDownPosition.x;
      const deltaY = event.clientY - mouseDownPosition.y;
      object.rotation.x += deltaY * 0.01;
      object.rotation.y += deltaX * 0.01;
      mouseDownPosition.x = event.clientX;
      mouseDownPosition.y = event.clientY;
    }
  });
};
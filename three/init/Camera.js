import { PerspectiveCamera } from "three";

export class Camera extends PerspectiveCamera {
  constructor() {
    super(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.position.z = 5;
    this.onWindowResize();
  }

  onWindowResize() {
    window.addEventListener("resize", () => {
      this.aspect = window.innerWidth / window.innerHeight;
      this.updateProjectionMatrix();
    });
  }
}

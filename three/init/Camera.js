import { PerspectiveCamera } from "three";

export class Camera extends PerspectiveCamera {
  width = window.innerWidth;
  height = window.innerHeight;
  tolerance = 2;

  constructor() {
    super(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.position.z = 5;
    this.onWindowResize();
  }

  onWindowResize() {
    window.addEventListener("resize", () => {
      if (
        window.innerWidth > this.width + this.tolerance ||
        window.innerWidth < this.width - this.tolerance ||
        window.innerHeight > this.height + this.tolerance ||
        window.innerHeight < this.height - this.tolerance
      ) {
        this.aspect = window.innerWidth / window.innerHeight;
        this.updateProjectionMatrix();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      }
    });
  }
}

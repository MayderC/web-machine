import { WebGLRenderer } from "three";

export class Render extends WebGLRenderer {
  constructor(props) {
    super({
      antialias: true,
      alpha: true,
      canvas: document.querySelector(props.canvas),
    });

    this.camera = props.camera;
    this.scene = props.scene;

    this.functionsToExecute = new Map();

    this.onWindowResize();
    this.init();
    this.animate();
  }

  init() {
    this.setClearColor(0x000000, 0); // the default
    this.setSize(window.innerWidth, window.innerHeight);
  }

  addFunctionToExecute(func, name) {
    this.functionsToExecute.set(name, func);
  }

  executeFunctions() {
    this.functionsToExecute.forEach((f) => {
      f();
    });
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.executeFunctions();
    this.render(this.scene, this.camera);
  }

  onWindowResize() {
    document.addEventListener("resize", () => {
      this.setSize(window.innerWidth, window.innerHeight);
    });
  }
}

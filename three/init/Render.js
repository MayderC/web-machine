import { WebGLRenderer } from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


export class Render extends WebGLRenderer {
  constructor(props) {
    super({
      antialias: true,
      alpha: true,
      canvas: document.querySelector(props.canvas),
    });

    this.camera = props.camera;
    this.scene = props.scene;

    this.controls = new OrbitControls( this.camera, this.domElement );


    this.onWindowResize();
    this.init();
    this.animate();
  }

  init() {
    this.setClearColor(0x000000, 0); // the default
    this.setSize(window.innerWidth, window.innerHeight);
  }


  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.controls.update();
    this.render(this.scene, this.camera);
  }

  onWindowResize() {
    window.addEventListener("resize", () => {
      this.setSize(window.innerWidth, window.innerHeight);
    });
  }
}

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

export class Loader extends GLTFLoader {
  constructor() {
    super();

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
    );
    dracoLoader.setDecoderConfig({ type: "js" });
    dracoLoader.preload();
    this.setDRACOLoader(this.dracoLoader);
  }

  async loadModel(url) {
    const model = await this.loadAsync(url);
    return model.scene;
  }
}

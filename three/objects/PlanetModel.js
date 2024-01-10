import { Loader } from "../tools/Loader";

export class PlanetModel {
  loader = new Loader();

  constructor() {
    this.url = "/glb/planet.glb";
    this.model = null
  }
  async loadModel() {
    const model = await this.loader.loadModel(this.url);
    this.model = model;
    return model;
  }


}

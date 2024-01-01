import { Loader } from "../tools/Loader";

export class PlanetModel {
  loader = new Loader();

  constructor() {
    this.url = "/glb/planet.glb";
  }
  async loadModel() {
    const model = await this.loader.loadModel(this.url);
    return model;
  }
}

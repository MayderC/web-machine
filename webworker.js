import { Loader } from "./three/tools/Loader"



self.addEventListener('message', async function(e) {

  const loader = new Loader();
  const ThreeDObject = await loader.loadModel('/scene.gltf');
  const model = ThreeDObject.children[0].children[0].children[0].children[0].children[0];

  const positionArray = model.geometry.attributes.position.array.slice(0);
  const normalArray = model.geometry.attributes.normal.array.slice(0);
  const uvArray = model.geometry.attributes.uv.array.slice(0);
  const indexArray = model.geometry.index.array.slice(0);

  const material = model.material;

  const materialData = {
    color: material.color.getHex(),
    roughness: material.roughness,
    metalness: material.metalness,
    side: material.side,
    map: material.map ? material.map.image.src : null,
    name : material.name
  };
  
  self.postMessage({ positionArray, normalArray, uvArray, indexArray, materialData }, 
    [positionArray.buffer, normalArray.buffer, uvArray.buffer, indexArray.buffer]);

})


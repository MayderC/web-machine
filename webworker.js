import { Loader } from "./three/tools/Loader"


//webworker


self.addEventListener('message', async function(e) {

  const loader = new Loader();
  const ThreeDObject = await loader.loadModel('/scene.gltf');
  //transferable objects
  const model = ThreeDObject.children[0].children[0].children[0].children[0].children[0];
  //bufferGeometry.getAttribute('position').array.buffer;
  console.log(model);
  // const positionArray =  model.geometry.getAttribute('position').array.buffer.slice(0);
  // const normalArray = model.geometry.getAttribute('normal').array.buffer.slice(0);
  // const uvArray = model.geometry.getAttribute('uv').array.buffer.slice(0);
  //index array
  //const indexArray = model.geometry.getIndex().array.buffer.slice(0);

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
  
  self.postMessage({ positionArray, normalArray, uvArray, indexArray, materialData }, [positionArray.buffer, normalArray.buffer, uvArray.buffer, indexArray.buffer]);


})


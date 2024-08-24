import * as THREE from 'three';

class BackgroundWaves {
  constructor() {

    this.vertexHeight = 40,
		this.planeDefinition = 25,
		this.planeSize = 50,
    this.planeGeometry = new THREE.PlaneGeometry(this.planeSize, this.planeSize, this.planeDefinition, this.planeDefinition);
    const wireframeMaterial = new THREE.MeshBasicMaterial({ color: '#c30e9f', wireframe: true });
    this.plane = new THREE.Mesh(this.planeGeometry, wireframeMaterial)
    this.plane.position.z = -5;
    this.plane.rotation.x = Math.PI *0.5

  }

animatePlane() {
  const clock = new THREE.Clock();
  
  const waveAmplitude = 0.5; // Amplitud de las olas
  const waveFrequency = 2.0; 

  const animate = () => {
    requestAnimationFrame(animate);

    const time = clock.getElapsedTime(); // Obtener el tiempo total transcurrido

    const positionAttribute = this.plane.geometry.attributes.position;

    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i); // Obtener la posición X del vértice
      const y = positionAttribute.getY(i); // Obtener la posición Y del vértice

      // Modificar la posición Z en función de una función seno para crear olas
      const z = Math.sin(x * waveFrequency + time) * waveAmplitude + Math.sin(y * waveFrequency + time) * waveAmplitude;
      positionAttribute.setZ(i, z); // Establece la nueva posición Z
    }

    //rotation on the y axis
    this.plane.rotation.z += 0.001;

    positionAttribute.needsUpdate = true; // Actualiza la geometría
  };

  animate();
}


  getPlane() {
    return this.plane;
  }
}

export default BackgroundWaves;























































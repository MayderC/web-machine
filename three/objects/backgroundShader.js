import * as THREE from 'three';

class BackgroundShader {
  constructor() {

    this.vertexHeight = 40,
		this.planeDefinition = 25,
		this.planeSize = 50,

    this.planeGeometry = new THREE.PlaneGeometry(this.planeSize, this.planeSize, this.planeDefinition, this.planeDefinition);
    this.uniforms ={
      // color1: { value: new THREE.Color(0x1a2a6c) }, // Color del fondo superior
      // color2: { value: new THREE.Color(0xb21f1f) }  // Color del fondo inferior
      color2: { value: new THREE.Color(0x8a2be2) }, // Morado brillante (BlueViolet)
      color1: { value: new THREE.Color('#2f2f2f') }  // Negro puro
    };
    this.shaderMaterial = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader:this.vertexShader(),
      fragmentShader: this.fragmentShader(),
      side: THREE.DoubleSide
    });


    this.plane = new THREE.Mesh(this.planeGeometry, this.shaderMaterial);
    this.plane.position.z = -16;

  }



  fragmentShader(){
    return /*glsl */ `
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;

      void main() {
        float mixFactor = pow(vUv.y, 3.8); // Exponente ajustable
        vec3 color = mix(color1, color2, mixFactor);
        gl_FragColor = vec4(color, 1.0);
      }
    `;
  }

  vertexShader(){
    return /*glsl*/ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
  }

animatePlane() {
  const clock = new THREE.Clock();

  const animate = () => {
    requestAnimationFrame(animate);

    const time = clock.getElapsedTime(); // Obtener el tiempo total transcurrido

  };

  animate();
}


  getPlane() {
    return this.plane;
  }
}

export default BackgroundShader;























































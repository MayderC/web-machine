
import * as THREE from "three";
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';


export const svgPathsTo3dMesh = (data) => {
  const paths = data.paths;
		const group = new THREE.Group();
		for ( let i = 0; i < paths.length; i ++ ) {
			const path = paths[ i ];
			const material = new THREE.MeshBasicMaterial( {
				color: path.color,
				side: THREE.DoubleSide,
				depthWrite: false
			} );

			const shapes = SVGLoader.createShapes( path );
			for ( let j = 0; j < shapes.length; j ++ ) {
				const shape = shapes[ j ];
        const extrudeSettings = {
          depth: 50, // Profundidad de la extrusión
          bevelEnabled: false // Deshabilitar biselado
        };
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
				const mesh = new THREE.Mesh( geometry, material );
				group.add( mesh );
			}
		}
		group.scale.multiplyScalar( 0.25 );
    return group
}
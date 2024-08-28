import gsap from 'gsap';

export const animateObjectEntry = (object, duration = 1) => {
  gsap.fromTo(object.scale, 
    { x: 0, y: 0, z: 0 }, // Initial scale
    { x: 1, y: 1, z: 1, duration, ease: 'power3.out' } // Final scale
  );
};

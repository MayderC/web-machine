export function handlePlanetAnimation(model, scene, scroll) {
  if (window.innerWidth < 500) {
    model.scale.set(0.7, 0.7, 0.7);
  }

  if (window.innerWidth > 960) {
    model.children[0].children[0].children[0].children[0].rotation.y += 0.005;
    model.children[0].children[0].children[0].children[0].rotation.x += 0.003;
  }
}

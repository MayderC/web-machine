export function handleAvatarAnimation(avatar, scene, scroll) {
  if (window.innerWidth > 960) {
    //use window.innerwidth to set responsive
    avatar.position.y = scroll * 0.15 - 4.4;
    avatar.position.x = -window.innerWidth * 0.001;
  }

  if (window.innerWidth <= 960) {
    //use window.innerwidth to set responsive
    avatar.scale.set(0.9, 0.9, 0.9);
    avatar.position.y = scroll * 0.15 - 3.3;
    avatar.position.x = 0;
  }
}

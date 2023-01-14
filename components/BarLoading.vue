<template>
  <div class="container">
    <div class="layer-0"></div>
    <div class="layer-1"></div>
    <div class="layer-2"></div>
    <div class="layer-3"></div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  height: 100vh;
  background: #4b8fe6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 200px;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
  padding: 20px;
}

.layer-0 {
  width: 10px;
  height: 10px;
  background: #d1b347;
  border-radius: 50%;

  animation: 1s bar-anim infinite cubic-bezier(0.25, 0.52, 0.8, 0.53) alternate;
}

.layer-1 {
  width: 10px;
  height: 10px;
  background: #d13232;
  border-radius: 50%;

  animation: 1s bar-anim infinite cubic-bezier(0.25, 0.52, 0.8, 0.53) alternate;
  animation-delay: 100ms;
}
.layer-2 {
  width: 10px;
  height: 10px;
  background: #1dd150;
  border-radius: 50%;

  animation: 0.7s bar-anim infinite cubic-bezier(0.25, 0.52, 0.8, 0.53)
    alternate;
  animation-delay: 200ms;
}
.layer-3 {
  width: 10px;
  height: 10px;
  background: #2837d1;
  border-radius: 50%;

  animation: 1s bar-anim infinite cubic-bezier(0.25, 0.52, 0.8, 0.53) alternate;
  animation-delay: 300ms;
}

@keyframes bar-anim {
  to {
    border-radius: 50px;
    height: 100px;
  }
}
</style>

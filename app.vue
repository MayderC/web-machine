<template>
  <main class="container">
    <NuxtPage />
    <MFooter></MFooter>
    <canvas id="three"></canvas>
  </main>
</template>

<script lang="ts" setup>

const scroll = ref(0);





</script>

<style>
.container {
  position: relative;
}

#three {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>

<template>
  <article
    :class="`description_card about__item ${props.full ? 'full' : ''}`">
    <div class="left"></div>
    <p class="description__text">
      {{ props.description }}
    </p>
    <div class="right"></div>
  </article>
</template>

<script setup lang="ts">

interface DescriptionCardProps {
  description: string;
  full?: boolean;
}

const props = defineProps<DescriptionCardProps>();


</script>

<style scoped>

* {
  box-sizing: border-box;
}

.left, .right {
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: 11;
}

.left{
  left: 0;
}

.right{
  right: 0;
}

.left::after{
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #a31d937e 0%, #362c3e 100%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 9;
  transition: transform 0.5s;
}


.left:hover::after{
  transform: translateX(100%);
  transition: transform 0.5s;
}

/* right yellow */

.right::after{
  content: '';
  position: absolute;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, #00dc805c 0%, #362c3e 100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 9;
  transition: transform 0.5s;
}

.right:hover::after{
  transform: translateX(-100%);
  transition: transform 0.5s;
}


.description_card {
  position: relative;
  width: 300px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #362c3e ;
  overflow: hidden;
}

.description__text{
  position: relative;
  z-index: 12;
}

.full {
  width: 300px;
}

@media (min-width: 1200px) {
  .full {
    width: 100%;
  }
}


</style>
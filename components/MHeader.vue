<template>
  <header class="header">
    <div class="header__item">
      <h1 class="header__title">{{ title }}</h1>
      <p class="header__text">{{ description }}</p>
    </div>
    <div class="header__img_astro">
      <img class="astro" src="../assets/img/as.png" />
    </div>
    <div class="header__img_p">
      <img class="fly" src="../assets/img/fly.png" />
    </div>
    <div class="header__skills">
      <div class="skills_text">
        <p>Tecnologías principales</p>
      </div>
      <div class="skills__items">
        <div class="skill__html skill">
          <img src="../assets/img/nodejs-icon.svg" />
          <p>Nodejs</p>
        </div>
        <div class="skill__vue skill">
          <img src="../assets/img/vue.svg" />
          <p>Vuejs</p>
        </div>
        <div class="skill__css skill">
          <img src="../assets/img/react-2.svg" />
          <p>Reacjs</p>
        </div>
        <div class="skill__js skill">
          <img src="../assets/img/javascript.svg" />
          <p>JavaScript</p>
        </div>
        <div class="skill__js skill">
          <img src="../assets/img/typescript.webp" />
          <p>TypeScript</p>
        </div>
      </div>
    </div>
    <m-header-svg class="header__img"></m-header-svg>
  </header>
</template>

<script>
export default {
  name: "MHeader",
  props: {
    title: { type: String, default: "" },
    description: { type: String, default: "" },
  },
};
</script>

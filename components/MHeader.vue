<template>
  <header class="header">
    <div class="header__item--left">
      <div>
        <h1 class="header__title">MayderC</h1>
        <p class="header__text">Software Developer</p>
      </div>

      <div class="skills__items">
        <div class="skill__html skill">
          <nuxt-img width="30" height="30" class="astro" load="lazy" src="/Portfolio/img/etlv8yh63ngdwzvgq39i" />
          <p>Nodejs</p>
        </div>
        <div class="skill__js skill">
          <nuxt-img width="30" height="30" class="astro" load="lazy" src="/Portfolio/img/okhmdg2osnuvtd8p8mqh"/>
          <p>NestJs</p>
        </div>
        <div class="skill__vue skill">
          <nuxt-img width="30" height="30" class="astro"  load="lazy" src="/Portfolio/img/idyeqmohvouuzroizixw" />
          <p>Vuejs</p>
        </div>
        <div class="skill__css skill">
          <nuxt-img width="30" height="30" class="astro" load="lazy" src="/Portfolio/img/obefg1bjzxuxcjatfbcm" />
          <p>Reacjs</p>
        </div>

        <div class="skill__js skill">
          <nuxt-img width="30" height="30" class="astro" load="lazy" src="/Portfolio/img/eqeepdn59xkcnftnsmwt" />
          <p>TypeScript</p>
        </div>
      </div>

    </div>


    <!-- Imagenes -->
    <div class="header__img_astro">
      <nuxt-img class="astro" load="lazy" src="/Portfolio/img/hy5lxqzc5dranip0ljk4">
      </nuxt-img>
    </div>
    <div class="header__img_p">
      <img class="fly" src="../assets/img/fly.webp" />
    </div>
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

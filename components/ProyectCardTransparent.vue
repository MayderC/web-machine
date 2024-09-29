<template>
  <div class="card__container">
    <div class="hover-effect"></div>
    <div class="card__item--img">
      <nuxt-img load="lazy" :src="`Portfolio/img/${img}`"/>
    </div>
    <div class="card__item--body">
      <h3 class="proyect__name">{{ name }}</h3>
      <div class="proyect__description">
        <p>{{ text }}</p>
      </div>
      <div class="proyect__skills">
      <!-- emmit name on click-->
        <tag-skill-name
          v-for="item of items"
          @click="$emit('receive', item)"
          :key="item"
          :name="item"
        ></tag-skill-name>
      </div>
      <footer class="proyect__info">
        <div class="proyect__links">
          <a :href="github" target="_blank">
            <icon-git-hub></icon-git-hub>
          </a>
          <a :href="live" target="_blank">
            <icon-link></icon-link>
          </a>
          <a v-if="info" href="" target="_blank">
            <!-- <nuxt-img sou src="../assets/img/icon-info.svg" alt=""/> -->
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>

import IconGitHub from './icons/IconGitHub.vue';
import IconLink from './icons/IconLink.vue';

export default {
  name: "ProyectCardTransparent",
  components:{
    IconGitHub,
    IconLink
  },
  props: {
    name: { type: String, default: "" },
    img: { type: String, default: "" },
    live: { type: String, default: "" },
    github: { type: String, default: "" },
    text: { type: String, default: "" },
    info: { type: String, default: "" },
    items: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/base/variables";

.card__container {
  background: rgba(102, 102, 102, 0.24);
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.09);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 13px;
  width: 330px;
  height: 486px;
  padding: 14px;
  position: relative;
}
.hover-effect{
  position: absolute;
  border-radius: 13px;
  width: 100%;
  height: 100%;
  background: #c30e9f;
  background: linear-gradient(to top, #00000000 10%, #490d42 100%);
  display: none;
  z-index: -1;
  left: 0;
  top: 0;
}

.card__container:hover .hover-effect{
  display: block;
}

.card__container:hover .card__item--img img{
  transform: scale(1.5);
  transition: 1s;
}

.card__item--img img{
  transition: .5s;
}


.card__item--img {
  border-radius: 8px;
  overflow: hidden;
}

.card__item--img img {
  object-fit: cover;
  width: 100%;
  height: 212px;
}
.card__item--body {
  cursor: default;
}
.proyect__name {
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  color: #fff;
}
.proyect__description {
  height: auto;
}
.proyect__description p {
  font-size: 15px;
  color: #cfcfcf;
  margin-bottom: 16px;
}
.proyect__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

footer.proyect__info {
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 99;
}

footer.proyect__info .proyect__links {
  height: 46px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 15px;
}
.proyect__links img, .proyect__links a {
  height: 23px;
  width: 23px;
}

@media (max-width: 458px) {
  .card__container {
    width: 327px;
    height: auto;
  }
  .proyect__skills {
    height: auto;
  }

  footer.proyect__info {
    position: relative;
    top: 0px;
    right: 16px;
  }
}
</style>

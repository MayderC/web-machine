<template>
  <div class="card__container">
    <div class="card__item--img">
      <img :src="img" alt="" />
    </div>
    <div class="card__item--body">
      <h3 class="proyect__name">{{ name }}</h3>
      <div class="proyect__description">
        <p>{{ text }}</p>
      </div>
      <div class="proyect__skills">
        <tag-skill-name
          v-for="item of items"
          :key="item"
          :name="item"
        ></tag-skill-name>
      </div>
      <footer class="proyect__info">
        <div class="proyect__links">
          <a href="" target="_blank"><img src="../assets/img/icon-info.svg" alt="" /></a>
          <a :href="live" target="_blank"><img src="../assets/img/icon-link.svg" alt="" /></a>
          <a :href="github" target="_blank"
            ><img src="../assets/img/icon-github.svg" alt=""
          /></a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProyectCardTransparent",
  props: {
    name: { type: String, default: "" },
    img: { type: String, default: "" },
    live: { type: String, default: "" },
    github: { type: String, default: "" },
    text: { type: String, default: "" },
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
  padding: 16px;
  position: relative;
}

.card__item--img {
  border-radius: 13px;
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


footer.proyect__info{
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
.proyect__links img {
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

  footer.proyect__info{
    position: relative;
    top: 0px;
    right: 16px;
  }
}
</style>

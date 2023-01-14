<template>
  <section class="card__proyect">
    <div class="card__item">
      <img :src="img" alt="" />
      <div class="card__item-hover">
        <ul>
          <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="card__footer">
      <div class="text__footer">
        <p>{{ text }}</p>
      </div>
      <div class="card__footer__links">
        <hand-link
          class="card__footer__item"
          :href="github"
          text="GitHub"
        ></hand-link>
        <hand-link
          class="card__footer__item"
          :href="live"
          text="info"
        ></hand-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProyectCard",
  props: {
    img: { type: String, default: "" },
    live: { type: String, default: "" },
    github: { type: String, default: "" },
    text: { type: String, default: "" },
    items: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/base/variables";

.card__proyect {
  width: 600px;
  background-color: #191919;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.5);
}
.card__proyect img {
  object-fit: cover;
  height: 306px;
  width: 600px;
}
.card__item {
  position: relative;
  height: 306px;
}

.card__item-hover {
  position: absolute;
  background: #000000c4;
  width: 100%;
  height: 306px;
  top: 0;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
}
.card__item-hover ul {
  color: white;
  width: 60%;
  font-weight: bolder;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
}
.card__item-hover ul li {
  background: #505050;
  border-radius: 10px;
  height: 40px;
  padding: 10px;
  cursor: default;
}

.card__item:hover .card__item-hover {
  opacity: 1;
  transition: opacity 0.3s;
}
.card__footer .text__footer p {
  color: #d9d9d9;
  font-weight: bold;
  text-align: center;
  margin-top: 12px;
}

.card__footer__links {
  display: flex;
  justify-content: space-around;
  gap: 30px;
  height: 50px;
  align-items: center;
}

.text__footer {
  padding: 0 10px;
}

@media (max-width: $movil-lg) {
  .card__proyect {
    width: 300px;
  }
  .card__proyect img {
    object-fit: cover;
    height: 206px;
    width: 300px;
  }
  .card__item {
    height: 206px;
  }
  .card__item-hover {
    height: 0;
    display: none;
  }
  .card__item-hover:hover {
    height: 206px;
    display: none;
  }
} ;
</style>

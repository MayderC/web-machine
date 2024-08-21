<template>
  <ul class="navbar__menu">
    <li class="navbar__list" @click="test" v-for="i in items">
      <div
        class="nav-menu-animation"
        :class="isNavOnTop ? 'nav-menu-animation-w' : 'nav-menu-animation-w'"
      ></div>
      <a
        class="navbar__link"
        :href="i.route"
        style="color: inherit"
        target="_blank"
        v-if="i.target"
      >
        {{ i.name }}</a
      >
      <nuxt-link
        class="navbar__link"
        :to="i.route"
        v-else
        :class="isNavOnTop ? 'colornavOn' : 'colornavOff'"
        >{{ i.name }}</nuxt-link
      >
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    isNavOnTop: { type: Boolean },
  },
  data() {
    return {
      items: [
        { name: "Home", route: "#home" },
        { name: "About", route: "#about" },
        { name: "Projects", route: "#projects" },
        {
          name: "Docs",
          route: "https://portfolio-blog-topaz.vercel.app/",
          target: true,
        },
      ],
    };
  },
  methods: {
    test() {
      this.$emit("toggleMenu");
    },
  },
};
</script>

<template>
  <nav class="navbar" :class="[isNavOnTop ? 'navOn' : 'navOff']">
    <div class="navbar__title">
      <nuxt-link
        class="navbar__link-home link"
        to="/"
        :class="isNavOnTop ? 'navbar__title-b' : 'navbar__title-w'"
        >MayderC
      </nuxt-link>
    </div>
    <m-navbar-menu
      :isNavOnTop="isNavOnTop"
      :class="[
        isNavOnTop ? 'sub-navOn' : 'sub-navOn',
        isMenuOpen ? 'showMenuMovil' : 'hideMenuMovil',
      ]"
      v-on:toggleMenu="show"
    ></m-navbar-menu>
    <m-button-nav
      :isOpen="isMenuOpen"
      v-on:toggleOpen="show"
      :color="colorButton"
    ></m-button-nav>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavOnTop: true,
      isMenuOpen: false,
      colorButton: "#fff",
    };
  },

  mounted() {
    //  if (process.browser) {
    //   window.onscroll = this.onScrollNavbarColor
    // }
  },

  methods: {
    onScrollNavbarColor() {
      if (window.scrollY > 95) {
        this.isNavOnTop = false;
        this.colorButton = "#222222";
      } else {
        this.isNavOnTop = true;
        this.colorButton = "#fff";
      }
    },

    show() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

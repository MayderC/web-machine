<template>
  <main class="main_index" id="main_scroll">
    <m-navbar class="nav__ghost"></m-navbar>
    <section class="header">
      <m-header title="MayderC" description="Software developer"></m-header>
    </section>
    <section class="about">
      <h2 class="subtitle">Acerca de mi</h2>
      <section class="about__items">
        <article class="about__img about__item">
          <nuxt-img
            provider="cloudinary"
            src="/v1704122883/Portfolio/img/plszt3knfrjr9kvzdicn.svg"
          ></nuxt-img>
        </article>
        <article class="about__description about__item">
          <p class="about__text">
            Mi nombre es Mayder, poseo Diplomado en Tecnologías de información,
            tengo conocimiento en desarrollo frontend y backend, principalmente
            con Typescript.
          </p>
        </article>
      </section>
    </section>

    <section class="extra__section">
      <h2 class="subtitle">Otras Tecnologías</h2>
      <section class="skills__extras">
        <article class="skill__Nodejs extra">
          <img src="../assets/img/spring.webp" />
        </article>

        <article class="skill__Nodejs extra">
          <img src="../assets/img/mysql-1.svg" />
        </article>
        <article class="skill__Nodejs extra">
          <img src="../assets/img/postgresql.svg" />
        </article>
        <article class="skill__Nodejs extra">
          <img src="../assets/img/mongodb.svg" />
        </article>
      </section>
    </section>
    <section class="contact__section">
      <h2 class="subtitle">Contacto</h2>
      <section class="contacto__item">
        <m-contact></m-contact>
      </section>
    </section>
  </main>
</template>

<style lang="scss">
@import "../assets/scss/main.scss";

.main_index {
  user-select: none;
}

.about,
.extra__section,
.contact__section,
section.header {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.contact__section {
  min-height: 60vh;
}

.about__img {
  height: 300px;
}

.about__text {
  text-shadow: 3px 3px 5px rgb(0, 0, 0);
}
</style>

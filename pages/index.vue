<template>
  <main class="main_index" id="main_scroll">
    <m-navbar class="nav__ghost"></m-navbar>
    <section class="header">
      <m-header title="MayderC" description="Web Developer"></m-header>
    </section>
    <section class="about">
      <h2 class="subtitle">Acerca de mi</h2>
      <section class="about__items">
        <article class="about__img about__item">
          <img src="../assets/img/about.svg" />
        </article>
        <article class="about__description about__item">
          <p class="about__text">
            Soy desarrollador web Diplomado de 3 años en Tecnologías de
            información, me dedico al desarrollo frontend y backend.
          </p>
        </article>
      </section>
    </section>

    <section class="extra__section">
      <h2 class="subtitle">Otras Tecnologías</h2>
      <section class="skills__extras">
        <article class="skill__Nodejs extra">
          <img src="../assets/img/dot-net.svg" />
        </article>
        <article class="skill__Nodejs extra">
          <img src="../assets/img/c--4.svg" />
        </article>
        <article class="skill__Nodejs extra">
          <img src="../assets/img/express.svg" />
        </article>
        <article class="skill__Nodejs extra">
          <img src="../assets/img/typescript.svg" />
        </article>
        <article class="skill__Nodejs extra">
          <img src="../assets/img/mysql-1.svg" />
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

.about,
.extra__section,
.contact__section,
section.header {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.contact__section {
  min-height: 60vh;
}
</style>

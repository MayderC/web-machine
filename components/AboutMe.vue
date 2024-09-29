<template>
  <section id="about" class="about">
    <h2 class="subtitle">
      Sobre mi
    </h2>
    <section class="about__items">
      <article class="about__img about__item">
        <img
          class="avatar-img"
          src="/assets/img/avatar.webp"
        ></img>
      </article>
      <div class="desc-1">
        <description-card
          :description="description1"
        ></description-card>
      </div>
      <div class="desc-2">
        <description-card
          :description="description2"
        ></description-card>
      </div>
      <div class="desc-3">
        <description-card
          :description="description3"
        ></description-card>
      </div>
      <div class="desc-4">
        <description-card
          :full="true"
          :description="description4"
        ></description-card>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">

const description1 = `Mi nombre es Mayder, poseo el grado de Bachillerato en Ingeniería en Tecnologías de la Información. Tengo conocimientos en desarrollo frontend y backend, principalmente con TypeScript.`

const description2 = `Como desarrollador frontend, utilizo Vue.js o React.js. Uso Tailwind CSS o SCSS para estilos, y por ultimo y más importante, consumo APIs REST.`

const description3 = `Como desarrollador backend, creo APIs REST con Node.js, Nest.js, Java y Spring Boot. Tengo conocimientos en MVC, arquitectura hexagonal, arquitectura N capas, y JWT para autorización. Trabajo con MongoDB, SQL y ORMs.`

const description4 = `Además tengo conocimientos en Git, Docker. Tambien en metodologías ágiles, y tengo experiencia en el uso de herramientas como trello, slack, github projects.
Actualmente estoy aprendiendo AWS y microservicios. Y de vez en cuando, hago proyectos personales que incluyen tecnologías como Python, IA con LLM, y 3D con Three.js.`

</script>

<style scoped>

.about{
  padding-top: 75px;
}

.about__items{
  display: grid;
  grid-template-columns: repeat(2, 404px);
  grid-template-areas: 
  "img desc1"
  "desc2 desc3"
  "desc4 desc4";
  place-items: center;
  gap: 50px;
}

@media (max-width: 900px) {
  .about__items {
    grid-template-columns: 1fr; /* Un solo columna */
    grid-template-areas: 
      "img"
      "desc1"
      "desc2"
      "desc3"
      "desc4";
    gap: 20px;
  }
}

/* Para tabletas o pantallas medianas */
@media (min-width: 900px) and (max-width: 1200px) {
  .about__items {
    grid-template-columns: repeat(2, 1fr); /* Dos columnas flexibles */
    grid-template-areas: 
      "img img"
      "desc1 desc2"
      "desc3 desc4";
    gap: 20px;
  }
}

.about__img{
  grid-area: img;
  display: grid;
  align-items: center;
}

.desc-4{
  grid-area: desc4;
  width: 100%;
}

.desc-1{
  grid-area: desc1;
  display: grid;
  align-items: center;
}
.desc-2{
  grid-area: desc2;
}
.desc-3{
  grid-area: desc3
}

.desc-1, .desc-2, .desc-3{
  display: grid;
  align-items: center;
  justify-content: center;
}

</style>
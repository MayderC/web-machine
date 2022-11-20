<template>
  <footer class="footer">
    <div class="footer__text text--top"></div>
    <div class="footer__container">
      <a
        class="footer__item"
        href="https://www.youtube.com/channel/UCN6QP97Il86O08qEPE7gXvQ"
        target="_blank"
        ><img src="~/assets/img/youtube-icon.svg" alt="" /></a
      ><a class="footer__item" href="https://github.com/MayderC" target="_blank"
        ><img src="~/assets/img/github-octocat.svg" alt="github mayderc" /></a
      ><a
        class="footer__item"
        href="https://www.linkedin.com/in/david-cortesb/"
        target="_blank"
        ><img src="~/assets/img/linkedin-icon.svg" alt="linkedin mayderc"
      /></a>
    </div>
    <div class="footer__text text--bottom">
      <p>Desarrollada por MayderC usando Nuxtjs</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MFooter",
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #f5f4fd;
  margin-top: 90px;
  border-top: 5px solid #2975a8;
}
.text--top {
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 16px;
}
.text--bottom {
  text-align: center;
  padding: 10px;
}
.footer__container {
  display: flex;
  justify-content: space-evenly;
}
.footer__item {
  width: 50px;
}
.footer__item > img {
  max-width: 100%;
  transition: 0.2s;
}
.footer__item:hover img {
  transform: translateY(-6px);
  transition: 0.2s;
}
</style>

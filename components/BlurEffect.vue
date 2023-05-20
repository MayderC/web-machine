<template>
  <div class="blur"></div>
</template>

<script>
export default {
  name: "BlurEffect",
  color: "",
};
</script>

<style lang="scss" scoped>
.blur {
  width: 169px;
  height: 158px;
  position: absolute;
  background: rgba(95, 35, 89, 0.28);
  filter: blur(37.5px);
}
</style>

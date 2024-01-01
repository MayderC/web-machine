<template>
  <div class="wrapper">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "TagSkillName",
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #606060;
  padding: 0.3rem 1rem;
  border-radius: 14px;
  font-weight: bold;
  cursor: default;
  font-size: 15px;
}

.wrapper p {
  color: #e6eefc;
  text-transform: lowercase;
}
</style>

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
  background-color: #799aee;
  padding: 0.1rem 1rem;
  border-radius: 14px;
  font-weight: bold;
  cursor: default;
  max-height: 23.19px;
}

.wrapper p {
  color: #1b3371;
}
</style>

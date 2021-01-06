<template>
  <div class="user-wrapper">
    <div class="user-meta">
      {{ userData.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  props: ["userData"],
  data() {},
  created() {},
};
</script>

<style scoped>
.user-wrapper {
  margin: 5px;
  padding: 10px;
  border-right: 1px solid var(--color-lighter-dark);
}
</style>
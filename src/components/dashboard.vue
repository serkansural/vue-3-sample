<template>
  <div>
    <div>
      <h1>Dashboard</h1>
    </div>
    <div>
      <div>User count: 10</div>
    </div>
    <div>
      <user-list></user-list>
    </div>
  </div>
</template>

<script>
import UserList from "./user-list.vue";

export default {
  components: { UserList },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
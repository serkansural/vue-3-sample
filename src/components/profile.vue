<template>
  <div>
    <user :user-id="userId" :less="false"></user>
  </div>
</template>

<script>
import User from "./user.vue";
export default {
  components: {
    User,
  },
  props: {
    userId: {
      type: Number,
      required: true,
      default: -1,
    },
  },
  created() {
    console.log(this.userId);
  },
};
</script>

<style scoped>
</style>
<template>
  <div class="user-list-wrapper">
    <div v-if="users.length > 0">
      <div v-for="user in users" v-bind:key="user.id">
        <user :user-data="user" :less="true"></user>
      </div>
    </div>
    <div v-else>Loading users...</div>
  </div>
</template>

<script>
import { DBApi } from "../db.js";
import User from "./user.vue";

const db = new DBApi();
export default {
  name: "user-list",
  components: {
    User,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.loadUsers();
  },
  methods: {
    loadUsers: function () {
      db.getUsers((data) => {
        this.users = data;
      });
    },
  },
};
</script>

<style scoped>
.user-list-wrapper {
  border-left: 1px solid var(--color-lighter-dark);
  padding: 10px 20px;
  margin: 10px 20px;
}
</style>
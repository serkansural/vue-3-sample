<template>
  <div class="user-wrapper">
    <div class="control" v-if="less">
      <hr />
      <router-link
        :to="{
          name: 'profile',
          params: {
            userId: typeof userData !== 'undefined' ? userData.id : -1,
          },
        }"
      >
        <div class="profile">Profile</div>
      </router-link>
    </div>
    <div class="user-meta">
      <div v-if="userData">
        <div>
          <strong>@{{ userData.username }}</strong>
        </div>
        <div>{{ userData.name }} {{ userData.email }}</div>
      </div>
      <div v-else-if="lazyData">
        <div>
          <strong>@{{ lazyData.username }}</strong>
        </div>
        <div>{{ lazyData.name }} -- {{ lazyData.email }}</div>
        <div>
          <div>Phone: {{ lazyData.phone }}</div>
          <div>{{ lazyData.website }}</div>
          <div><hr /></div>
        </div>
        <div v-if="posts.length > 0">
          <div class="post" v-for="post in posts" :key="post.id">
            <post :post="post"></post>
          </div>
        </div>
      </div>
      <div v-else>Loading data...</div>
    </div>
  </div>
</template>

<script>
import { DBApi } from "../db.js";
import Post from "./post.vue";

const db = new DBApi();

export default {
  name: "user",
  components: {
    Post,
  },
  props: {
    userId: {
      type: Number,
      required: false,
    },
    userData: {
      type: Object,
      required: false,
    },
    less: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      lazyData: null,
      posts: [],
    };
  },
  created() {
    if (!this.less) {
      this.loadUser();
      this.loadPosts();
    }
  },
  methods: {
    loadUser: function () {
      db.getUser(this.userId, (data) => {
        this.lazyData = data;
      });
    },
    loadPosts: function () {
      db.getPosts(this.userId, (data) => {
        this.posts = data;
      });
    },
  },
};
</script>

<style scoped>
hr {
  border-color: var(--color-darker-light);
  height: 0;
  width: 100%;
}

.user-wrapper {
  margin: 5px;
  padding: 10px;
  border-right: 1px solid var(--color-lighter-dark);
  display: flex;
  flex-direction: column;
  background-color: var(--color-dark);
  color: #fff;
}

.control {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.control .profile {
  background-color: var(--color-lighter-dark);
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  font-weight: bold;
  border-radius: 3px;
}

.control .profile:hover {
  color: var(--color-lighter-dark);
}

.post {
  margin-right: -15px;
  margin-left: 15px;
  margin-top:15px;
}

.post:nth-child(2n) {
  margin-left: -15px;
  margin-right: 15px;
}
</style>
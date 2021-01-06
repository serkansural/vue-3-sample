<template>
  <div class="post-wrapper">
    <div v-if="!edit">
      <h2>{{ post.title }}</h2>
      <div>{{ post.body }}</div>
      <div class="control">
        <div class="button" @click="modify">Edit</div>
      </div>
    </div>
    <div v-else>
      <div>
        <input type="text" v-model="post.title" />
      </div>
      <div>
        <textarea v-model="post.body"></textarea>
      </div>
      <div>
        <input class="update" type="button" @click="modify" value="Update" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    modify: function () {
      this.edit = !this.edit;
    },
  },
};
</script>

<style scoped>
.post-wrapper {
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  background-color: var(--color-lighter-light);
  color: var(--color-dark);
  padding: 10px;
  border-radius: 5px;
}

.control {
  display: flex;
  justify-content: flex-end;
}

.control .button {
  background-color: var(--color-dark);
  color: var(--color-lighter-light);
  cursor: pointer;
}
input {
  width: 100%;
  padding: 10px 5px;
  font-size: 18px;
  font-weight: bold;
  box-sizing: border-box;
}
input.update {
  margin-top: 10px;
  cursor: pointer;
}
textarea {
  width: 100%;
  padding: 10px 20px;
  margin-top: 20px;
  box-sizing: border-box;
}
</style>
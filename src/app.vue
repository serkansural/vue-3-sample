<template>
  <div>
    <header>
      <router-link to="/test"> TEst</router-link>
    </header>
    <article>
        <router-view></router-view>
    </article>
    <footer></footer>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background-color: #e9e5df;
}

div {
  border: 1px solid red;
}
.test {
  background: red;
}
</style>
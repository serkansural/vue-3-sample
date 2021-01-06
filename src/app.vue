<template>
  <div>
    <header>
      <router-link to="/">
        <div class="nav-item">Home</div>
      </router-link>
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
:root {
  --color-dark: #264653;
  --color-lighter-dark: #2a9d8f;
  --color-lighter-light: #e9e5df;
  --color-darker-light: #e9c46a;
  --color-complementary-first: #f4a261;
  --color-complementary-second: #e76f51;
}

a {
  text-decoration: none;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: #cecbc6;
  font-size: 18px;
  max-width: 960px;
  margin: 0 auto;
  font-family: "Roboto Condensed", sans-serif;
}

.button {
  padding: 5px 10px;
  background-color: var(--color-dark);
  color: var(--color-lighter-light);
}

header {
  padding: 20px 0;
}
</style>
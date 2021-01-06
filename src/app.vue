<template>
  <div>
    <header>
      <router-link to="/">Dashboard</router-link>
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

html,
body {
  margin: 0;
  padding: 0;
  background-color: var(--color-lighter-light);
  font-size: 18px;
}

.button {
  padding: 5px 10px;
  background-color: var(--color-dark);
  color: var(--color-lighter-light);
}

article {
  max-width: 960px;
  margin: 0 auto;
}
</style>
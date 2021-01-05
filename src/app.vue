<template>
  <div class="test">APP ROOT {{ reactiveData.test }}</div>
</template>

<script>
import { reactive } from "vue";

export default {
  data() {
    return {
      reactiveData: rData,
    };
  },
};

</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

div {
  border: 1px solid red;
}
.test {
  background: red;
}
</style>
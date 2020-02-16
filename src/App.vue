<template>
  <div id="app">
    <router-view />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheFooter from "./components/TheFooter.vue";
export default Vue.extend({
  name: "app",
  components: {
    TheFooter
  },
  created() {
    this.$store.dispatch("welcome/getData");
    this.$store.dispatch("pizza/getData");
    this.$store.dispatch("ingredients/getData");
  }
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Rubik";
}
html {
  height: 100%;
}
body {
  min-height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  background: #f5f5f5;
}
</style>

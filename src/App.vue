<template>
  <div id="app">
    <transition
      name="slide"
      mode="out-in"
      appear
    >
      <router-view />
    </transition>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheFooter from "./components/TheFooter/TheFooter.vue";
export default Vue.extend({
  name: "app",
  components: {
    TheFooter
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
  overflow-x: hidden;
}

.slide-enter-active,
.slide-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-enter {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-leave-active {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>

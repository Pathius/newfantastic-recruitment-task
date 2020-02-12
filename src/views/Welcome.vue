<template>
  <section class="welcome">
    <span class="welcome__logo">🍕</span>
    <h1 class="welcome__title">{{title}}</h1>
    <span class="welcome__invite" v-html="invite"></span>
    <router-link to="/pizza" tag="button" class="button welcome__button">Start</router-link>
  </section>
</template>
<script>
export default {
  name: "welcome",
  computed: {
    title() {
      return this.$store.state.welcome.title;
    },
    invite() {
      return this.$store.state.welcome.invite;
    }
  },
  created() {
    if (this.title === "" && this.invite === "") {
      this.$store.dispatch("welcome/getData");
    }
  }
};
</script>
<style lang="scss">
@import "../scss/global-styles";
.welcome {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  &__logo {
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 70px;
  }
  &__title {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    margin: 40px 0;
    @media screen and (max-width: 768px) {
      font-size: 32px;
      padding: 0 25px;
    }
  }
  &__invite {
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    color: #7b7b7b;
    @media screen and (max-width: 768px) {
      font-size: 23px;
    }
  }
  &__button {
    width: 140px;
    height: 48px;
    margin-top: 40px;
  }
}
</style>

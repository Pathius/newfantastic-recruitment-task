<template>
  <section class="welcome">
    <span class="welcome__logo logo">🍕</span>
    <h1 class="welcome__title title">{{title}}</h1>
    <span class="welcome__invite text-gray" v-html="invite"></span>
    <BaseButton @click.native="$router.push('/pizza')" class="welcome__button">Start</BaseButton>
  </section>
</template>
<script>
import BaseButton from "../components/BaseButton";
export default {
  name: "welcome",
  components: {
    BaseButton
  },
  computed: {
    title() {
      return this.$store.state.welcome.title;
    },
    invite() {
      return this.$store.state.welcome.invite;
    }
  }
};
</script>
<style scoped lang="scss">
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
  }
  &__title {
    margin: 40px 0;
    @media screen and (max-width: 768px) {
      padding: 0 25px;
    }
  }
  &__invite {
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
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

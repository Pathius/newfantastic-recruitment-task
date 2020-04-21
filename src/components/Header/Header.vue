<template>
  <header class="header">
    <span
      @click="goHomePage"
      class="header__back"
    >
      Powrót na START
    </span>
    <span class="header__logo logo-header">
      <IconPizza />
    </span>
    <span class="header__price">
      {{price | readablePrice}}zł
    </span>
  </header>
</template>
<script>
import IconPizza from "../Icons/IconPizza.vue";
export default {
  components: {
    IconPizza
  },
  computed: {
    price() {
      return this.$store.getters["pizza/price"];
    }
  },
  methods: {
    goHomePage() {
      this.$store.commit("pizza/initialValues");
      this.$store.commit("ingredients/initialValues");
      this.$router.push("/");
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../scss/global-styles";

.header {
  position: relative;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 48px;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    margin-bottom: 40px;
  }
  &__back {
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      font-size: 13px;
      line-height: 15px;
      padding-left: 20px;
    }
  }
  &__logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px 0;
  }
  &__price {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    @media screen and (max-width: 768px) {
      font-size: 13px;
      line-height: 15px;
      padding-right: 20px;
    }
  }
}
</style>
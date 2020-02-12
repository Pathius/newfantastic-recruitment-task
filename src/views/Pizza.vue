<template>
  <section class="pizza">
    <header class="pizza__header">
      <router-link to="/" tag="span" class="pizza__header-back">Powrót na START</router-link>
      <span class="pizza__header-logo">🍕</span>
      <span class="pizza__header-price">0,00zł</span>
    </header>
    <h2 class="pizza__title">Wybierz rozmiar pizzy</h2>
    <section class="pizza__choose">
      <PizzaOption v-for="(size, index) in sizes" :key="index" :size="size" />
    </section>
    <router-link to="/" tag="button" class="button pizza__button">Wstecz</router-link>
    <router-link
      to="/customize"
      tag="button"
      :disabled="!isChoosen"
      :class="isChoosen ? 'button pizza__button' : 'button-disabled pizza__button'"
    >Dalej</router-link>
  </section>
</template>
<script>
import PizzaOption from "../components/PizzaOption";

export default {
  name: "welcome",
  components: {
    PizzaOption
  },
  computed: {
    sizes() {
      return this.$store.state.pizza.sizes;
    },
    isChoosen() {
      return this.$store.state.pizza.activeOption !== "";
    }
  },
  created() {
    this.$store.dispatch("pizza/getData");
  }
};
</script>
<style lang="scss">
@import "../scss/global-styles";
.pizza {
  text-align: center;
  &__header {
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
    &-back {
      font-style: normal;
      font-weight: bold;
      font-size: 19px;
      line-height: 23px;
      @media screen and (max-width: 768px) {
        font-size: 13px;
        line-height: 15px;
        padding-left: 20px;
      }
    }
    &-logo {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 60px;
      line-height: 70px;
      padding: 20px 0;
      @media screen and (max-width: 768px) {
        font-size: 40px;
        line-height: 47px;
      }
    }
    &-price {
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
  &__title {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    margin: 48px 0 52px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
      padding: 0 40px;
      margin: 0 0 36px;
    }
  }
  &__choose {
    justify-content: center;
    display: flex;
    @media screen and (max-width: 768px) {
      justify-content: flex-start;
    }
  }
  &__button {
    width: 224px;
    height: 48px;
    margin: 60px 8px 0;
    @media screen and (max-width: 768px) {
      width: 160px;
      height: 48px;
      margin: 52px 8px 81px;
    }
  }
}
</style>

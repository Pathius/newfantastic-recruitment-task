<template>
  <section class="checkout">
    <Header />
    <h2 class="title checkout__title">
      Złóż zamówienie
    </h2>
    <section class="checkout__panel">
      <PizzaCheckout />
    </section>
    <section class="checkout__buttons">
      <BaseButton
        @click.native="addAnother"
        :transparent="true"
        class="checkout__button"
      >
        Dodaj następny
      </BaseButton>
      <BaseButton
        @click.native="$router.push('/transaction')"
        class="checkout__button"
      >
        Zakończ zamówienie
      </BaseButton>
    </section>
  </section>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import PizzaCheckout from "../../components/PizzaCheckout/PizzaCheckout.vue";
import BaseButton from "../../components/BaseButton/BaseButton.vue";

export default {
  name: "checkout",
  components: {
    Header,
    PizzaCheckout,
    BaseButton
  },
  methods: {
    addAnother() {
      this.$store.commit("pizza/newPizza");
      this.$store.commit("ingredients/newPizza");
      this.$router.push("/pizza");
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../scss/global-styles";

.checkout {
  text-align: center;
  &__title {
    margin-bottom: 48px;
    @media screen and (max-width: 768px) {
      margin-bottom: 32px;
    }
  }
  &__panel {
    margin: 0 auto;
    background: white;
    width: 624px;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }
  &__price {
    display: flex;
    justify-content: space-between;
    padding: 0 40px 40px;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    &-text-gray {
      color: #7b7b7b;
    }
    @media screen and (max-width: 768px) {
      padding: 15px 16px 40px;
      font-size: 23px;
      line-height: 32px;
      font-weight: 500;
    }
  }
  &__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__button {
    width: 624px;
    height: 48px;
    margin: 16px 0 0;
    &:nth-last-of-type(1) {
      margin: 16px 0 80px;
    }
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 64px;
      margin: 16px 20px 0;
    }
  }
}
</style>
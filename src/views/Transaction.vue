<template>
  <div class="transaction">
    <span class="transaction__logo">🍕</span>
    <h2 class="title trasaction__title">Dziękujemy!</h2>
    <p class="transaction__info">Twoje zamówienie za {{}} zł powinno dotrzeć do Ciebie za 29min 57s</p>
    <router-link to="/" tag="button" class="button transaction__button">Wróć do strony głównej</router-link>
    <span class="transaction__subtitle">Twoje zamówienie</span>
    <section class="transaction__panel">
      <PizzaCheckout />
      <PizzaCheckout />
      <PizzaCheckout />
      <h3 class="transaction__price">
        <span>Łącznie</span>
        <span class="transaction__price-text-gray">46,90zł</span>
      </h3>
    </section>
  </div>
</template>
<script>
import PizzaCheckout from "../components/PizzaCheckout";
export default {
  components: {
    PizzaCheckout
  }
};
</script>
<style scoped lang="scss">
@import "../scss/global-styles";
.transaction {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__logo {
    font-size: 60px;
    line-height: 70px;
    margin: 88px 0 40px;
    @media screen and (max-width: 768px) {
      margin: 80px 0 40px;
    }
  }
  &__info {
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    text-align: center;
    color: #7b7b7b;
    margin: 40px 0;
    @media screen and (max-width: 768px) {
      font-size: 23px;
      line-height: 32px;
    }
  }
  &__button {
    width: 292px;
    height: 48px;
  }
  &__subtitle {
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    color: #7b7b7b;
    margin: 66px 0 48px;
    @media screen and (max-width: 768px) {
      margin: 64px 0 32px;
    }
  }
  &__panel {
    margin: 0 auto;
    background: white;
    width: 624px;
    margin-bottom: 105px;
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
}
</style>
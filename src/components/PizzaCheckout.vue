<template>
  <section class="checkout">
    <section class="checkout__product" v-for="(pizza, index) in pizzas" :key="index">
      <p class="checkout__product-size">
        <span>Rozmiar {{pizza.name}}</span>
        <span class="text-gray">{{pizza.sizePrice}}zł</span>
      </p>
      <p
        class="checkout__product-ingredient"
        v-for="(ingredient, index) in pizza.ingredients"
        :key="index"
      >
        <span>
          {{ingredient.name}}
          <span class="text-gray">x{{ingredient.units}}</span>
        </span>
        <span class="text-gray">{{ingredient.units*ingredient.price | readablePrice}}zł</span>
      </p>
    </section>
    <h3 class="checkout__product-price">
      <span>Łącznie</span>
      <span class="text-gray">{{price | readablePrice}}zł</span>
    </h3>
  </section>
</template>
<script>
export default {
  computed: {
    pizzas() {
      return this.$store.state.pizza.orderedPizzas;
    },
    price() {
      return this.$store.getters["pizza/price"];
    }
  }
};
</script>
<style scoped lang="scss">
@import "../scss/global-styles";
.checkout {
  padding: 40px 40px 0;
  @media screen and (max-width: 768px) {
    padding: 16px 16px 0;
  }
  &__product {
    margin-bottom: 25px;
    &-size {
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 32px;
      display: flex;
      justify-content: space-between;
      margin: 8px 0;
      @media screen and (max-width: 768px) {
        font-size: 19px;
        line-height: 23px;
      }
    }
    &-ingredient {
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
      display: flex;
      justify-content: space-between;
      margin: 16px 0;
      @media screen and (max-width: 768px) {
        font-size: 13px;
        line-height: 15px;
      }
    }
    &-price {
      display: flex;
      justify-content: space-between;
      padding-bottom: 40px;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      text-transform: uppercase;
      @media screen and (max-width: 768px) {
        padding: 15px 0 40px;
        font-size: 23px;
        line-height: 32px;
        font-weight: 500;
      }
    }
  }
}
</style>
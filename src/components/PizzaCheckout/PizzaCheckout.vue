<template>
  <section class="checkout">
    <section
      class="checkout__product"
      v-for="(pizza, index) in pizzas"
      :key="index"
    >
      <p class="checkout__product-size">
        <span>
          Rozmiar {{pizza.name}}
        </span>
        <span class="text-gray">
          {{pizza.sizePrice}}zł
        </span>
      </p>
      <p
        class="checkout__product-ingredient"
        v-for="(ingredient, index) in pizza.ingredients"
        :key="index"
      >
        <span>
          {{ingredient.name}}
          <span class="text-gray">
            x{{ingredient.units}}
          </span>
        </span>
        <span class="text-gray">
          {{ingredient.units*ingredient.price | readablePrice}}zł
        </span>
      </p>
    </section>
    <h3 class="checkout__product-price">
      <span>
        Łącznie
      </span>
      <span class="text-gray">
        {{price | readablePrice}}zł
      </span>
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
<style scoped lang="scss" src="./PizzaCheckout.scss">
</style>
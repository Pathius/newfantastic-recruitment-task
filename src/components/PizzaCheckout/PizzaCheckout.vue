<template>
  <section class="checkout">
    <section
      class="checkout__product"
      v-for="(pizza, index) in pizzas"
      :key="index"
    >
      <p class="checkout__product-size">
        <span> Rozmiar {{ pizza.name }} </span>
        <span class="text-gray">
          {{ pizza.sizePrice }}zł
          <span
            @click="removePizza(pizza.id)"
            class="checkout__product-size-cancel"
            v-if="$route.name === 'checkout'"
          >
            X
          </span>
        </span>
      </p>
      <p
        class="checkout__product-ingredient"
        v-for="(ingredient, index) in pizza.ingredients"
        :key="index"
      >
        <span>
          {{ ingredient.name }}
          <span class="text-gray"> x{{ ingredient.units }} </span>
        </span>
        <span class="text-gray">
          {{ (ingredient.units * ingredient.price) | readablePrice }}zł
        </span>
      </p>
    </section>
    <h3 class="checkout__product-price" v-if="anyOrder">
      <span class="checkout__product-price-total">
        Łącznie
      </span>
      <span class="text-gray"> {{ price | readablePrice }}zł </span>
    </h3>
    <h3 class="checkout__product-price-invalid" v-else>
      <span>
        Niestety nie wykryliśmy pizzy w Twoim koszyku :(<br>
        Aby kontynuować kliknij przycisk poniżej
      </span>
    </h3>
  </section>
</template>
<script>
export default {
  methods: {
    removePizza(id) {
      this.$store.commit('pizza/removePizza', id);
    },
  },
  computed: {
    pizzas() {
      const { orderedPizzas } = this.$store.state.pizza;
      return orderedPizzas.filter((pizza) => pizza !== '');
    },
    price() {
      return this.$store.getters['pizza/price'];
    },
    anyOrder() {
      return this.$store.state.pizza.orderedPizzas.length;
    },
  },
};
</script>
<style scoped lang="scss" src="./PizzaCheckout.scss"></style>

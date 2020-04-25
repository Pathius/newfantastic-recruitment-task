<template>
  <section class="checkout">
    <Header />
    <h2 class="title checkout__title">
      Złóż zamówienie
    </h2>
    <section class="checkout__panel">
      <PizzaCheckout />
    </section>
    <section class="checkout__buttons" v-if="anyOrder">
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
    <section class="checkout__buttons" v-else>
      <BaseButton
        @click.native="$router.push('/pizza');"
        class="checkout__button"
      >
        Stwórz własną pizzę
      </BaseButton>
    </section>
  </section>
</template>
<script>
import Header from '../../components/Header/Header.vue';
import PizzaCheckout from '../../components/PizzaCheckout/PizzaCheckout.vue';
import BaseButton from '../../components/BaseButton/BaseButton.vue';

export default {
  name: 'checkout',
  components: {
    Header,
    PizzaCheckout,
    BaseButton,
  },
  methods: {
    addAnother() {
      this.$store.commit('pizza/newPizza');
      this.$store.commit('ingredients/newPizza');
      this.$router.push('/pizza');
    },
  },
  computed: {
    anyOrder() {
      return this.$store.state.pizza.orderedPizzas.length;
    },
  },
};
</script>
<style scoped lang="scss" src="./Checkout.scss"></style>

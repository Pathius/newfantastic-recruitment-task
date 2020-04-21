<template>
  <div class="transaction">
    <span class="transaction__logo logo">
      <IconPizza />
    </span>
    <h2 class="title trasaction__title">
      Dziękujemy!
    </h2>
    <p class="transaction__info">
      Twoje zamówienie za {{price | readablePrice}} zł powinno {{timeLeft}}
    </p>
    <BaseButton
      @click.native="goHomePage"
      class="button transaction__button"
    >
      Wróć do strony głównej
    </BaseButton>
    <span class="transaction__subtitle">
      Twoje zamówienie
    </span>
    <section class="transaction__panel">
      <PizzaCheckout />
    </section>
  </div>
</template>
<script>
import PizzaCheckout from "../../components/PizzaCheckout/PizzaCheckout.vue";
import BaseButton from "../../components/BaseButton/BaseButton.vue";
import IconPizza from "../../components/Icons/IconPizza";
export default {
  name: "transaction",
  components: {
    PizzaCheckout,
    BaseButton,
    IconPizza
  },
  data() {
    return {
      intervalId: 0
    };
  },
  computed: {
    price() {
      return this.$store.getters["pizza/price"];
    },
    timeLeft() {
      let timeLeft = this.$store.state.pizza.timeLeft;
      if (timeLeft > 60) {
        return `dotrzeć do Ciebie za ${Math.floor(
          timeLeft / 60
        )}min ${timeLeft % 60}s`;
      } else if (timeLeft > 0) {
        return `dotrzeć do Ciebie za ${timeLeft}s`;
      } else {
        return `już do Ciebie dotrzeć. Smacznego!`;
      }
    }
  },
  methods: {
    goHomePage() {
      this.$store.commit("pizza/initialValues");
      this.$store.commit("ingredients/initialValues");
      this.$router.push("/");
    }
  },
  created() {
    const that = this;
    this.$store.state.pizza.intervalId = setInterval(function() {
      that.$store.commit("pizza/subtractSecond");
    }, 1000);
  },
  beforeDestroy() {
    this.$store.commit("pizza/resetTimer");
  }
};
</script>
<style scoped lang="scss" src="./Transaction.scss">
</style>
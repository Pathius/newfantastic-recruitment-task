<template>
  <div class="transaction">
    <span class="transaction__logo logo">
      <IconPizza />
    </span>
    <h2 class="title trasaction__title">Dziękujemy!</h2>
    <p
      class="transaction__info"
    >Twoje zamówienie za {{price | readablePrice}} zł powinno {{timeLeft}}</p>
    <BaseButton @click.native="goHomePage" class="button transaction__button">Wróć do strony głównej</BaseButton>
    <span class="transaction__subtitle">Twoje zamówienie</span>
    <section class="transaction__panel">
      <PizzaCheckout />
    </section>
  </div>
</template>
<script>
import PizzaCheckout from "../components/PizzaCheckout";
import BaseButton from "../components/BaseButton";
import IconPizza from "../components/Icons/IconPizza";
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
    this.$store.state.pizza.intervalId = setInterval(() => {
      that.$store.commit("pizza/subtractSecond");
    }, 1000);
  },
  beforeDestroy() {
    this.$store.commit("pizza/resetTimer");
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
      margin: 40px 25px;
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
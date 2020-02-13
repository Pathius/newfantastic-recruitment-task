<template>
  <section class="pizza">
    <Header />
    <h2 class="title pizza__title">Wybierz rozmiar pizzy</h2>
    <section class="glider pizza__choose">
      <PizzaOption v-for="(size, index) in sizes" :key="index" :size="size" />
    </section>
    <button @click="goBack" class="button pizza__button">Wstecz</button>
    <router-link
      to="/customize"
      tag="button"
      :disabled="!isChoosen"
      :class="isChoosen ? 'button pizza__button' : 'button-disabled pizza__button'"
    >Dalej</router-link>
  </section>
</template>
<script>
import Header from "../components/Header";
import PizzaOption from "../components/PizzaOption";

export default {
  name: "welcome",
  components: {
    Header,
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
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  created() {
    this.$store.dispatch("pizza/getData");
  },
  mounted() {
    if (this.sizes.length == 0) {
      new Glider(document.querySelector(".glider"));
    }
  }
};
</script>
<style scoped lang="scss">
@import "../scss/global-styles";
.pizza {
  text-align: center;
  &__title {
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
    margin: 60px 8px 100px;
    @media screen and (max-width: 768px) {
      width: 160px;
      height: 48px;
      margin: 52px 8px 81px;
    }
  }
}
</style>

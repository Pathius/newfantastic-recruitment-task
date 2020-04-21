<template>
  <section class="customize">
    <Header />
    <h2 class="title customize__title">
      Wybierz składniki do pizzy
    </h2>
    <section class="customize__ingredients">
      <Ingredient
        v-for="(ingredient, index) in ingredients"
        :key="index"
        :index="index"
        :ingredient="ingredient"
      />
    </section>
    <BaseButton
      @click.native="goBack"
      class="customize__button"
    >
      Wstecz
    </BaseButton>
    <BaseButton
      @click.native="addPizza"
      class="customize__button"
    >
      Dalej
    </BaseButton>
  </section>
</template>
<script>
import Header from "../components/Header";
import Ingredient from "../components/Ingredient";
import BaseButton from "../components/BaseButton";

export default {
  name: "customize",
  components: {
    Header,
    Ingredient,
    BaseButton
  },
  computed: {
    ingredients() {
      return this.$store.state.ingredients.ingredients;
    },
    activeOption() {
      return this.$store.state.pizza.activeOption;
    }
  },
  methods: {
    goBack() {
      this.$store.commit("ingredients/initialValues");
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    addPizza() {
      this.$store.dispatch("pizza/addPizza");
      this.$router.push("/checkout");
    }
  }
};
</script>
<style scoped lang="scss">
@import "../scss/global-styles";
.customize {
  text-align: center;
  &__title {
    margin-bottom: 40px;
    @media screen and (max-width: 768px) {
      margin-bottom: 36px;
    }
  }
  &__ingredients {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__button {
    width: 140px;
    height: 48px;
    margin-top: 40px;
    margin: 60px 8px 100px;
  }
}
</style>
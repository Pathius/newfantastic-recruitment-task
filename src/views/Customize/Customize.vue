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
import Header from "../../components/Header/Header.vue";
import Ingredient from "../../components/Ingredient/Ingredient.vue";
import BaseButton from "../../components/BaseButton/BaseButton.vue";

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
<style scoped lang="scss" src="./Customize.scss">
</style>
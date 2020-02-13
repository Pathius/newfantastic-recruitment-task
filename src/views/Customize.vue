<template>
  <section class="customize">
    <Header />
    <h2 class="title customize__title">Wybierz składniki do pizzy</h2>
    <section class="customize__ingredients">
      <Ingredient v-for="(ingredient, index) in ingredients" :key="index" :ingredient="ingredient" />
    </section>
    <button @click="goBack" class="button customize__button">Wstecz</button>
    <router-link to="/checkout" tag="button" class="button customize__button">Dalej</router-link>
  </section>
</template>
<script>
import Header from "../components/Header";
import Ingredient from "../components/Ingredient";

export default {
  components: {
    Header,
    Ingredient
  },
  computed: {
    ingredients() {
      return this.$store.state.ingredients.ingredients;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  created() {
    this.$store.dispatch("ingredients/getData");
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
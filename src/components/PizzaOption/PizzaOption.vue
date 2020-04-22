<template>
  <div :class="isActive ? 'option' : 'option option-disabled'">
    <h3 class="option__title">
      {{size.name}}
    </h3>
    <img
      :src="imageUrl"
      alt=""
      class="option__image"
    >
    <section class="option__details">
      <p class="option__details-description">
        Rozmiar:
      </p>
      <p class="option__details-value">
        {{size.size}}cm
      </p>
    </section>
    <section class="option__details">
      <p class="option__details-description">
        Cena:
      </p>
      <p class="option__details-value">
        {{size.price}}zł
      </p>
    </section>
    <BaseButton
      @click.native="choose"
      class="option__button"
    >
      {{isChosen ? "Wybrany rozmiar" : "Wybierz rozmiar"}}
    </BaseButton>
  </div>
</template>
<script>
import BaseButton from "../BaseButton/BaseButton.vue";
export default {
  components: {
    BaseButton
  },
  props: {
    size: {
      type: Object,
      required: true
    }
  },
  computed: {
    isActive() {
      return (
        this.$store.state.pizza.activeOption.name === this.size.name ||
        this.$store.state.pizza.activeOption == ""
      );
    },
    isChosen() {
      return this.$store.state.pizza.activeOption.name === this.size.name;
    },
    price() {
      return this.$store.getters["pizza/price"];
    },
    imageUrl() {
      return require(`../../assets/sizes/${this.size.photo}`);
    }
  },
  methods: {
    choose() {
      this.$store.commit("pizza/changeOption", this.size);
    }
  }
};
</script>
<style scoped lang="scss" src="./PizzaOption.scss">
</style>
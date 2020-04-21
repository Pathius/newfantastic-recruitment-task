<template>
  <section class="ingredient">
    <div class="ingredient__image"></div>
    <h3 class="ingredient__name">
      {{ingredient.name}}
    </h3>
    <input
      type="text"
      class="ingredient__value"
      @focus="placeholder = ''"
      @blur="placeholder = 0"
      :placeholder="placeholder"
      @input="changeWeight"
    />
    <p class="ingredient__price">
      {{ingredient.price_per_unit}}zł/szt
    </p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      placeholder: 0
    };
  },
  props: {
    ingredient: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    changeWeight() {
      // Input type "number" doesn't detect the "-" as a character in a string, so it will allow to pass values like "0-3-3"
      // I used type "text" and replaced all potentially letters and special characters with 0
      event.target.value = +event.target.value.replace(
        /[a-zA-Z!@#\$%\^\&*\)\(+=._-]/gi,
        0
      );
      this.$store.dispatch("ingredients/checkWeight", {
        name: this.ingredient.name,
        price: this.ingredient.price_per_unit,
        units: event.target.value,
        weight: this.ingredient.weight * event.target.value,
        weightPerUnit: this.ingredient.weight,
        index: this.index
      });
    }
  }
};
</script>
<style scoped lang="scss" src="./Ingredient.scss">
</style>
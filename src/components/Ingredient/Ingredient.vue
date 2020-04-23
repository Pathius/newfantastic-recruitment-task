<template>
  <section class="ingredient">
    <img
      :src="imageUrl"
      alt=""
      class="ingredient__image"
    >
    <h3 class="ingredient__name">
      {{ingredient.name}}
    </h3>
    <input
      type="number"
      class="ingredient__value"
      @focus="placeholder = ''"
      @blur="inputBlur"
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
      !/^\d+$/.test(event.target.value) ? (event.target.value = "") : "";
      this.$store.dispatch("ingredients/checkWeight", {
        name: this.ingredient.name,
        price: this.ingredient.price_per_unit,
        units: event.target.value,
        weight: this.ingredient.weight * event.target.value,
        weightPerUnit: this.ingredient.weight,
        index: this.index
      });
    },
    inputBlur() {
      this.placeholder = 0;
      !+event.target.value ? (event.target.value = "") : "";
    }
  },
  computed: {
    imageUrl() {
      return require(`../../assets/ingredients/${this.ingredient.photo}`);
    }
  }
};
</script>
<style scoped lang="scss" src="./Ingredient.scss">
</style>
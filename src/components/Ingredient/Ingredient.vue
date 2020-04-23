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
    <QuantityIcons @changeQuantity="changeQuantity($event)" />
    <input
      type="number"
      class="ingredient__value"
      @focus="placeholder = ''"
      @blur="blurInput"
      :placeholder="placeholder"
      @input="changeQuantity"
      :value="quantity"
    />
    <p class="ingredient__price">
      {{ingredient.price_per_unit}}zł/szt
    </p>
  </section>
</template>
<script>
import QuantityIcons from "../QuantityIcons/QuantityIcons.vue";
export default {
  components: {
    QuantityIcons
  },
  data() {
    return {
      placeholder: 0,
      quantity: ""
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
    changeQuantity(operation) {
      // Check if quantity is provided from icons or input
      if (["minus", "plus"].includes(operation)) {
        if (operation === "minus") {
          this.quantity > 1 ? this.quantity-- : (this.quantity = "");
        } else if (operation === "plus") {
          this.quantity++;
        }
        event.target.value = this.quantity;
      } else {
        // Check if value has any unexpected invalid chars
        !/^\d+$/.test(event.target.value) ||
        (event.target.value.startsWith("0") && event.target.value.length > 1)
          ? (event.target.value = "")
          : "";
        this.quantity = event.target.value;
      }
      this.$store.dispatch("ingredients/checkWeight", {
        name: this.ingredient.name,
        price: this.ingredient.price_per_unit,
        units: event.target.value,
        weight: this.ingredient.weight * event.target.value,
        weightPerUnit: this.ingredient.weight,
        index: this.index
      });
      this.quantity = event.target.value;
    },
    blurInput() {
      this.placeholder = 0;
      if (!+this.quantity) {
        this.quantity = "";
      }
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
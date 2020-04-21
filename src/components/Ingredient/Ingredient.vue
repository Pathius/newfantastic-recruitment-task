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
<style scoped lang="scss">
.ingredient {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    width: 90%;
    justify-content: flex-start;
  }
  &__image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #c4c4c4;
    margin: 20px 32px 20px 64px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  &__name {
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    width: 448px;
    margin-right: 48px;
    text-align: left;
    @media screen and (max-width: 768px) {
      width: 150px;
      font-size: 23px;
      margin-left: 20px;
      margin-right: 5px;
    }
  }
  &__value {
    width: 40px;
    height: 40px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    border: 1px solid black;
    outline: none;
    &::placeholder {
      color: black;
    }
    @media screen and (max-width: 768px) {
      margin: 40px 0;
    }
  }
  &__price {
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;
    margin: 0 64px 0 40px;
    @media screen and (max-width: 768px) {
      width: 92px;
      text-align: right;
      margin: 0 24px 0px 0;
    }
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
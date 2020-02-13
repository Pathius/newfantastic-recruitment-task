<template>
  <section class="ingredient">
    <div class="ingredient__image"></div>
    <h3 class="ingredient__name">{{ingredient.name}}</h3>
    <input
      type="number"
      class="ingredient__value"
      @focus="placeholder = ''"
      @blur="placeholder = 0"
      :placeholder="placeholder"
      min="0"
    />
    <p class="ingredient__price">{{ingredient.price_per_unit}}zł/szt</p>
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
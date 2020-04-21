<template>
  <div :class="isActive ? 'option' : 'option option-disabled'">
    <h3 class="option__title">
      {{size.name}}
    </h3>
    <div class="option__img"></div>
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
import BaseButton from "./BaseButton";
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
    }
  },
  methods: {
    choose() {
      this.$store.commit("pizza/changeOption", this.size);
    }
  }
};
</script>
<style scoped lang="scss">
@import "../scss/global-styles";

.option {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: white;
  margin: 0 8px;
  max-width: 304px;
  @media screen and (max-width: 768px) {
    margin: 0 4px;
  }
  &-disabled {
    opacity: 0.4;
  }
  &__title {
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    margin: 29px 0 30px;
  }
  &__img {
    width: 178px;
    height: 178px;
    background: #c4c4c4;
    border-radius: 50%;
    margin-bottom: 36px;
  }
  &__details {
    width: 100%;
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 19px;
    &-description {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
    }
    &-value {
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
    }
  }
  &__button {
    margin: 16px 20px 22px;
    width: 268px;
    height: 48px;
  }
}
</style>
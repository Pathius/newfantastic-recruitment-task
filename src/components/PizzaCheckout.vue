<template>
  <section class="checkout">
    <p class="checkout__size">
      <span>Rozmiar MAX</span>
      <span class="checkout__text-gray">34,90zł</span>
    </p>
    <p class="checkout__ingredient" v-for="number in 5">
      <span>
        Ingredient name
        <span class="checkout__text-gray">x1</span>
      </span>
      <span class="checkout__text-gray">4,00zł</span>
    </p>
  </section>
</template>
<style scoped lang="scss">
.checkout {
  padding: 40px 40px 0;
  @media screen and (max-width: 768px) {
    padding: 16px 16px 0;
  }
  &__size {
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    @media screen and (max-width: 768px) {
      font-size: 19px;
      line-height: 23px;
    }
  }
  &__ingredient {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
    @media screen and (max-width: 768px) {
      font-size: 13px;
      line-height: 15px;
    }
  }
  &__text-gray {
    color: #7b7b7b;
  }
}
</style>
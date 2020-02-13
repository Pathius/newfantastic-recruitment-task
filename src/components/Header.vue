<template>
  <header class="header">
    <router-link to="/" tag="span" class="header-back">Powrót na START</router-link>
    <span class="header-logo">🍕</span>
    <span class="header-price">0,00zł</span>
  </header>
</template>
<style scoped lang="scss">
.header {
  position: relative;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 48px;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    margin-bottom: 40px;
  }
  &-back {
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      font-size: 13px;
      line-height: 15px;
      padding-left: 20px;
    }
  }
  &-logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 60px;
    line-height: 70px;
    padding: 20px 0;
    @media screen and (max-width: 768px) {
      font-size: 40px;
      line-height: 47px;
    }
  }
  &-price {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    @media screen and (max-width: 768px) {
      font-size: 13px;
      line-height: 15px;
      padding-right: 20px;
    }
  }
}
</style>
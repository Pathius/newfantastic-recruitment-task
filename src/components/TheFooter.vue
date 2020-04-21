<template functional>
  <footer class="footer">
    <p class="footer__text">
      @2020 Pizza Corp LTD
    </p>
  </footer>
</template>
<style scoped lang="scss">
.footer {
  position: absolute;
  width: 100%;
  color: white;
  bottom: 0;
  background-color: black;
  text-align: center;
  &__text {
    line-height: 14px;
    padding: 20px 0;
    font-size: 12px;
  }
}
</style>
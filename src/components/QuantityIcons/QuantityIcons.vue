<template>
  <span class="quantity__icons">
    <span
      class="quantity__icons-icon"
      @click="changeQuantity('minus')"
    >
      -
    </span>
    /
    <span
      class="quantity__icons-icon"
      @click="changeQuantity('plus')"
    >
      +
    </span>
  </span>
</template>
<script>
export default {
  methods: {
    changeQuantity(operation) {
      this.$emit("changeQuantity", operation);
    }
  }
};
</script>
<style scoped lang="scss" src="./QuantityIcons.scss">
</style>
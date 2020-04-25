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
      :class="freeSpace ? 'quantity__icons-icon' : 'quantity__icons-icon-invalid'"
      @click="changeQuantity('plus')"
    >
      +
    </span>
  </span>
</template>
<script>
export default {
  props: {
    freeSpace: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    changeQuantity(operation) {
      this.$emit('changeQuantity', operation);
    },
  },
};
</script>
<style scoped lang="scss" src="./QuantityIcons.scss">
</style>

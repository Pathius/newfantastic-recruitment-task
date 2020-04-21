<template>
  <button
    :disabled="disabled"
    :class="styling"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    transparent: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    styling() {
      return this.disabled
        ? "button-disabled"
        : this.transparent
        ? "button-transparent"
        : "button";
    }
  }
};
</script>
<style scoped lang="scss" src="./BaseButton.scss">
</style>
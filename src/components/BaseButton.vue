<template>
  <button :disabled="disabled" :class="styling">
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
<style scoped lang="scss">
.button {
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  outline: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &-disabled {
    @extend .button;
    opacity: 0.4;
    cursor: not-allowed;
  }
  &-transparent {
    @extend .button;
    background: transparent;
    border: 1px solid black;
    color: black;
  }
}
</style>
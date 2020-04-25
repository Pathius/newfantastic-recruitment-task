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
      required: false,
    },
    transparent: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    styling() {
      if (this.disabled) {
        return 'button-disabled';
      } if (this.transparent) {
        return 'button-transparent';
      }
      return 'button';
    },
  },
};
</script>
<style scoped lang="scss" src="./BaseButton.scss"></style>

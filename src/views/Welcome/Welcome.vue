<template>
  <section class="welcome">
    <span class="welcome__logo logo">
      <IconPizza />
    </span>
    <h1 class="welcome__title title">
      WITAJ W KREATORZE PIZZY!
    </h1>
    <p class="welcome__invite text-gray">
      Kliknij START aby rozpocząć
    </p>
    <BaseButton
      @click.native="$router.push('/pizza')"
      class="welcome__button"
    >
      Start
    </BaseButton>
  </section>
</template>
<script>
import BaseButton from "../../components/BaseButton/BaseButton.vue";
import IconPizza from "../../components/Icons/IconPizza.vue";
export default {
  name: "welcome",
  components: {
    BaseButton,
    IconPizza
  }
};
</script>
<style scoped lang="scss" src="./Welcome.scss">
</style>

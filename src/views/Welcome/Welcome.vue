<template>
  <section class="welcome">
    <span class="welcome__logo logo">
      <IconPizza />
    </span>
    <h1 class="welcome__title title">
      WITAJ W KREATORZE PIZZY!
    </h1>
    <p class="welcome__invite">
      Kliknij START aby rozpocząć
    </p>
    <IconArrowDown />
    <BaseButton @click.native="$router.push('/pizza')" class="welcome__button">
      Start
    </BaseButton>
  </section>
</template>
<script>
import BaseButton from '../../components/BaseButton/BaseButton.vue';
import IconPizza from '../../components/Icons/IconPizza/IconPizza.vue';
import IconArrowDown from '../../components/Icons/IconArrowDown/IconArrowDown.vue';

export default {
  name: 'welcome',
  components: {
    BaseButton,
    IconPizza,
    IconArrowDown,
  },
};
</script>
<style scoped lang="scss" src="./Welcome.scss"></style>

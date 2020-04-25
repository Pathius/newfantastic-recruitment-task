<template>
  <header class="header">
    <span class="header__back" @click="goHomePage">
      Powrót na START
    </span>
    <span class="header__logo logo-header" @click="goHomePage">
      <IconPizza />
    </span>
    <span class="header__price"> {{ price | readablePrice }}zł </span>
  </header>
</template>
<script>
import IconPizza from '../Icons/IconPizza/IconPizza.vue';

export default {
  components: {
    IconPizza,
  },
  computed: {
    price() {
      return this.$store.getters['pizza/price'];
    },
  },
  methods: {
    goHomePage() {
      this.$store.commit('pizza/initialValues');
      this.$store.commit('ingredients/initialValues');
      this.$router.push('/');
    },
  },
};
</script>
<style scoped lang="scss" src="./Header.scss"></style>

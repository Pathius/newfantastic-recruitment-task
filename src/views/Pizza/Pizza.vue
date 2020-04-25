<template>
  <section class="pizza">
    <Header />
    <h2 class="title pizza__title">
      Wybierz rozmiar pizzy
    </h2>
    <section class="glider pizza__choose">
      <PizzaOption v-for="(size, index) in sizes" :key="index" :size="size" />
    </section>
    <BaseButton class="pizza__button" @click.native="goBack">
      Wstecz
    </BaseButton>
    <BaseButton
      :class="
        isChoosen ? 'button pizza__button' : 'button-disabled pizza__button'
      "
      :disabled="!isChoosen"
      @click.native="$router.push('/customize')"
    >
      Dalej
    </BaseButton>
  </section>
</template>
<script>
import Header from '../../components/Header/Header.vue';
import PizzaOption from '../../components/PizzaOption/PizzaOption.vue';
import BaseButton from '../../components/BaseButton/BaseButton.vue';

export default {
  name: 'pizza',
  components: {
    Header,
    PizzaOption,
    BaseButton,
  },
  computed: {
    sizes() {
      return this.$store.state.pizza.sizes;
    },
    isChoosen() {
      return this.$store.state.pizza.activeOption !== '';
    },
  },
  methods: {
    goBack() {
      this.$store.state.pizza.activeOption = '';
      if (window.history.length) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
    },
  },
};
</script>
<style scoped lang="scss" src="./Pizza.scss"></style>

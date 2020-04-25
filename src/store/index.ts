import Vue from 'vue';
import Vuex from 'vuex';
import welcome from './modules/welcome.ts';
import pizza from './modules/pizza.ts';
import ingredients from './modules/ingredients.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    welcome,
    pizza,
    ingredients,
  },
});

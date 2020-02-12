import Vue from 'vue'
import Vuex from 'vuex'
import welcome from './modules/welcome'
import pizza from './modules/pizza'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    welcome,
    pizza
  }
})

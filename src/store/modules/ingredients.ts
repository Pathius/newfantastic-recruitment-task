import Vue from 'vue'
import Vuex from 'vuex'

const endpointURL = "https://wp.recruitment.newfantastic.com/wp-json/wp/v2/pizza_ingredients"

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        ingredients: []
    },
    mutations: {
        setIngredients: (state, payload) => state.ingredients = payload,
    },
    actions: {
        getData: async ({ commit }) => {
            let response = await fetch(endpointURL);
            response = await response.json();
            let ingredients = []
            for (let ingredient of response) {
                ingredients.push(ingredient.acf)
            }
            commit("setIngredients", ingredients)
        }
    }
}
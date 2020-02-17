import Vue from 'vue'
import Vuex from 'vuex'
import ingredients from './ingredients'

const endpointURL = "https://wp.recruitment.newfantastic.com/wp-json/wp/v2/pizza_sizes"

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        sizes: [],
        activeOption: "",
        sizePrice: 0,
        orderedPizzas: [],
        orderedPizzasCost: 0,
        timeLeft: 1800,
        intervalId: 0
    },
    mutations: {
        setData: (state, payload) => state.sizes = payload,
        initialValues: state => {
            state.activeOption = ""
            state.sizePrice = 0
            state.orderedPizzas = []
            state.orderedPizzasCost = 0
        },
        resetPrice: state => state.sizePrice = 0,
        newPizza: state => {
            state.activeOption = "";
            state.sizePrice = 0;
        },
        changeOption: (state, payload) => {
            state.activeOption = payload
            state.sizePrice = state.activeOption.price
        },
        addPizza: (state, payload) => {
            state.orderedPizzas.push(payload)
            state.orderedPizzasCost += +payload.sizePrice
            state.orderedPizzasCost += payload.ingredientsPrice
        },
        subtractSecond: state => {
            if (state.timeLeft == 0) {
                clearInterval(state.intervalId)
            } else state.timeLeft--
        },
        resetTimer: state => {
            clearInterval(state.intervalId);
            state.timeLeft = 1800;
        }

    },
    actions: {
        getData: async ({ commit }) => {
            try {
                let response = await fetch(endpointURL);
                if (!response.ok) throw new Error(response.statusText)
                response = await response.json();
                let sizes = []
                for (let size of response) {
                    sizes.unshift(size.acf)
                }
                commit('setData', sizes)
            } catch (error) {
                console.log("PIZZA GETDATA ERROR", error)
            }
        },
        addPizza: ({ state, commit, rootState }) => {
            commit("addPizza", {
                name: state.activeOption.name,
                sizePrice: state.activeOption.price,
                ingredientsPrice: rootState.ingredients.ingredientsCost,
                ingredients: rootState.ingredients.ingredientsUsed
            })
            commit("resetPrice")
            commit("ingredients/resetPrice", null, { root: true })
        }
    },
    getters: {
        price: (state, getters, rootState) => {
            return state.orderedPizzasCost + +state.sizePrice + rootState.ingredients.ingredientsCost
        }
    }
}
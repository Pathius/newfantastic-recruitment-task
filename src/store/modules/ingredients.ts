import Vue from 'vue'
import Vuex from 'vuex'

const endpointURL = "https://wp.recruitment.newfantastic.com/wp-json/wp/v2/pizza_ingredients"

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        ingredients: [],
        ingredientsUsed: {},
        ingredientsUsedWeight: [],
        ingredientsWeight: 0,
        ingredientsCost: 0,
    },
    mutations: {
        setData: (state, payload) => state.ingredients = payload,
        initialValues: state => {
            state.ingredientsUsed = {}
            state.ingredientsUsedWeight = []
            state.ingredientsWeight = 0
            state.ingredientsCost = 0
        },
        newPizza: state => {
            state.ingredientsUsed = {};
            state.ingredientsUsedWeight = [];
            state.ingredientsWeight = 0;
            state.ingredientsCost = 0;
        },
        resetPrice: state => state.ingredientsCost = 0,
        setUsedIngredient: (state, { index, name, price, units }) => {
            state.ingredientsUsed[index] = {
                name,
                price,
                units
            }
        },
        deleteUnusedIngredient: (state, payload) => {
            delete state.ingredientsUsed[payload]
        },
        setIngredientsWeight: (state, { index, weight }) => {
            state.ingredientsUsedWeight[index] = weight;
            state.ingredientsWeight = state.ingredientsUsedWeight.reduce((a, b) => a + b, 0);
        },
        setIngredientsPrice: (state) => {
            let ingredientsPrice = 0;
            for (let ingredient of Object.values(state.ingredientsUsed)) {
                ingredientsPrice += ingredient.price * ingredient.units;
            }
            state.ingredientsCost = ingredientsPrice
        }
    },
    actions: {
        getData: async ({ commit }) => {
            try {
                let response = await fetch(endpointURL);
                if (!response.ok) throw new Error(response.statusText)
                response = await response.json();
                let ingredients = []
                for (let ingredient of response) {
                    ingredients.push(ingredient.acf)
                }
                commit("setData", ingredients)
            } catch (error) {
                console.log("INGREDIENTS GETDATA ERROR", error)
            }
        },
        checkWeight: ({ state, commit, rootState }, { name, price, units, weight, weightPerUnit, index }) => {
            // Check max free units possible to use
            let maxWeight = rootState.pizza.activeOption.maximum_ingredients_weight
            let freeWeight = maxWeight - state.ingredientsWeight
            if (state.ingredientsUsed[index]) {
                let usedWeight = state.ingredientsUsed[index].units * weightPerUnit
                freeWeight = maxWeight - (state.ingredientsWeight - usedWeight)
            }
            if (freeWeight < weight) {
                let freeUnits = Math.floor(freeWeight / weightPerUnit)
                event.target.value = freeUnits
                units = freeUnits
                weight = weightPerUnit * freeUnits
            }
            // Check if units are equal or lower than 0
            // If so delete their element in igredientsUsed object 
            if (units > 0) {
                commit('setUsedIngredient', {
                    index,
                    name,
                    price,
                    units
                })
            } else {
                commit('deleteUnusedIngredient', index)
            }
            commit("setIngredientsWeight", { index, weight })
            commit("setIngredientsPrice")
        }
    }
}
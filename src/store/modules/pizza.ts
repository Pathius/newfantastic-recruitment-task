export default {
    namespaced: true,
    state: {
        sizes: [
            {
                name: "Medium",
                size: "32",
                price: "26.90",
                maximum_ingredients_weight: 4
            },
            {
                name: "Max",
                size: "45",
                price: "34.90",
                maximum_ingredients_weight: 6
            },
            {
                name: "Mega",
                size: "60",
                price: "51.90",
                maximum_ingredients_weight: 8
            }
        ],
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
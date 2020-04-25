export default {
  namespaced: true,
  state: {
    sizes: [
      {
        name: 'Medium',
        size: '32',
        price: '26.90',
        maximum_ingredients_weight: 4,
        photo: 'Medium.jpg',
      },
      {
        name: 'Max',
        size: '45',
        price: '34.90',
        maximum_ingredients_weight: 6,
        photo: 'Max.jpg',
      },
      {
        name: 'Mega',
        size: '60',
        price: '51.90',
        maximum_ingredients_weight: 8,
        photo: 'Mega.jpg',
      },
    ],
    activeOption: '',
    sizePrice: 0,
    orderedPizzas: [],
    orderedPizzasCost: 0,
    timeLeft: 1800,
    intervalId: 0,
  },
  mutations: {
    setData: (state, payload) => (state.sizes = payload),
    initialValues: (state) => {
      state.activeOption = '';
      state.sizePrice = 0;
      state.orderedPizzas = [];
      state.orderedPizzasCost = 0;
    },
    resetPrice: (state) => (state.sizePrice = 0),
    newPizza: (state) => {
      state.activeOption = '';
      state.sizePrice = 0;
    },
    removePizza: (state, payload) => {
      let index = 0;
      let cost = 0;
      // Find index
      for (const [i, pizza] of state.orderedPizzas.entries()) {
        if (pizza.id === payload) {
          cost = pizza.wholePrice;
          index = i;
        } 
      }
      state.orderedPizzas.splice(index, 1);
      state.orderedPizzasCost -= cost;
    },
    changeOption: (state, payload) => {
      state.activeOption = payload;
      state.sizePrice = state.activeOption.price;
    },
    addPizza: (state, payload) => {
      state.orderedPizzas.push(payload);
      state.orderedPizzasCost += +payload.sizePrice;
      state.orderedPizzasCost += payload.ingredientsPrice;
    },
    subtractSecond: (state) => {
      if (state.timeLeft === 0) {
        clearInterval(state.intervalId);
      } else state.timeLeft--;
    },
    resetTimer: (state) => {
      clearInterval(state.intervalId);
      state.timeLeft = 1800;
    },
  },
  actions: {
    addPizza: ({ state, commit, rootState }) => {
      const usedIds = state.orderedPizzas.map(pizza => pizza.id);
      let id = (Math.random() * 1000).toFixed();
      while (usedIds.includes(id)) {
        id = (Math.random() * 100).toFixed();
      }
      commit('addPizza', {
        name: state.activeOption.name,
        sizePrice: state.activeOption.price,
        ingredientsPrice: rootState.ingredients.ingredientsCost,
        wholePrice: +state.activeOption.price + +rootState.ingredients.ingredientsCost,
        ingredients: rootState.ingredients.ingredientsUsed,
        id,
      });
      commit('resetPrice');
      commit('ingredients/resetPrice', null, { root: true });
    },
  },
  getters: {
    price: (state, getters, rootState) => (
      state.orderedPizzasCost
      + +state.sizePrice
      + rootState.ingredients.ingredientsCost
    ),
    timeLeft: ({ timeLeft }) => {
      if (timeLeft > 60) {
        return `dotrzeć do Ciebie za ${Math.floor(
          timeLeft / 60,
        )}min ${timeLeft % 60}s`;
      } if (timeLeft > 0) {
        return `dotrzeć do Ciebie za ${timeLeft}s`;
      }
      return 'już do Ciebie dotrzeć. Smacznego!';
    },
  },
};

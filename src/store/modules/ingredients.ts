export default {
  namespaced: true,
  state: {
    ingredients: [
      {
        name: "Szynka",
        price_per_unit: "2",
        weight: 0.4,
        photo: "Ham.jpg",
      },
      {
        name: "Ser",
        price_per_unit: "3",
        weight: 0.5,
        photo: "Cheese.jpg",
      },
      {
        name: "Salami",
        price_per_unit: "4",
        weight: 0.4,
        photo: "Salami.jpg",
      },
      {
        name: "Kurczak",
        price_per_unit: "3",
        weight: 0.3,
        photo: "Chicken.jpg",
      },
      {
        name: "Pieczarki",
        price_per_unit: "3",
        weight: 0.3,
        photo: "Mushrooms.jpg",
      },
      {
        name: "Oliwki",
        price_per_unit: "5",
        weight: 0.2,
        photo: "Olives.jpg",
      },
    ],
    ingredientsUsed: {},
    ingredientsUsedWeight: [],
    ingredientsWeight: 0,
    ingredientsCost: 0,
  },
  mutations: {
    setData: (state, payload) => (state.ingredients = payload),
    initialValues: (state) => {
      state.ingredientsUsed = {};
      state.ingredientsUsedWeight = [];
      state.ingredientsWeight = 0;
      state.ingredientsCost = 0;
    },
    newPizza: (state) => {
      state.ingredientsUsed = {};
      state.ingredientsUsedWeight = [];
      state.ingredientsWeight = 0;
      state.ingredientsCost = 0;
    },
    resetPrice: (state) => (state.ingredientsCost = 0),
    setUsedIngredient: (state, { index, name, price, units }) => {
      state.ingredientsUsed[index] = {
        name,
        price,
        units,
      };
    },
    deleteUnusedIngredient: (state, payload) => {
      delete state.ingredientsUsed[payload];
    },
    setIngredientsWeight: (state, { index, weight }) => {
      state.ingredientsUsedWeight[index] = weight;
      state.ingredientsWeight = state.ingredientsUsedWeight.reduce(
        (a, b) => a + b,
        0
      );
    },
    setIngredientsPrice: (state) => {
      let ingredientsPrice = 0;
      for (let ingredient of Object.values(state.ingredientsUsed)) {
        ingredientsPrice += ingredient.price * ingredient.units;
      }
      state.ingredientsCost = ingredientsPrice;
    },
  },
  actions: {
    checkWeight: (
      { state, commit, rootState },
      { name, price, units, weight, weightPerUnit, index }
    ) => {
      // Check max free units possible to use
      let maxWeight = rootState.pizza.activeOption.maximum_ingredients_weight;
      let freeWeight = maxWeight - state.ingredientsWeight;
      if (state.ingredientsUsed[index]) {
        let usedWeight = state.ingredientsUsed[index].units * weightPerUnit;
        freeWeight = maxWeight - (state.ingredientsWeight - usedWeight);
      }
      if (freeWeight < weight) {
        let freeUnits = Math.floor(freeWeight / weightPerUnit);
        event.target.value = freeUnits;
        units = freeUnits;
        weight = weightPerUnit * freeUnits;
      }
      // Check if units are equal or lower than 0
      // If so delete their element in igredientsUsed object
      if (units > 0) {
        commit("setUsedIngredient", {
          index,
          name,
          price,
          units,
        });
      } else {
        commit("deleteUnusedIngredient", index);
      }
      commit("setIngredientsWeight", { index, weight });
      commit("setIngredientsPrice");
    },
  },
  getters: {
    freeWeight({ ingredientsWeight }, getters, rootState) {
      return (
        rootState.pizza.activeOption.maximum_ingredients_weight -
        ingredientsWeight
      );
    },
  },
};

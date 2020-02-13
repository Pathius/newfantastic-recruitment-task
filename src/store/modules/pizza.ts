import Vue from 'vue'
import Vuex from 'vuex'

const endpointURL = "https://wp.recruitment.newfantastic.com/wp-json/wp/v2/pizza_sizes"

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        sizes: [],
        activeOption: ""
    },
    mutations: {
        setSizes: (state, payload) => state.sizes = payload,
        changeOption: (state, payload) => state.activeOption = payload
    },
    actions: {
        getData: async ({ commit }) => {
            let response = await fetch(endpointURL);
            response = await response.json();
            let sizes = []
            // In case of future changes in sizes (some other may be added) I used loop
            for (let size of response) {
                sizes.unshift(size.acf)
            }
            commit('setSizes', sizes)
        }
    }
}
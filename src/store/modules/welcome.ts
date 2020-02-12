import Vue from 'vue'
import Vuex from 'vuex'

const endpointURL = "https://wp.recruitment.newfantastic.com/wp-json/wp/v2/pages?slug=welcome"

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        title: "",
        invite: ""
    },
    mutations: {
        setTitle: (state, payload) => state.title = payload,
        setInvite: (state, payload) => state.invite = payload
    },
    actions: {
        getData: async ({ commit }) => {
            let response = await fetch(endpointURL);
            response = (await response.json())[0];
            commit('setTitle', response.title.rendered)
            commit('setInvite', response.content.rendered)
        }
    }
}
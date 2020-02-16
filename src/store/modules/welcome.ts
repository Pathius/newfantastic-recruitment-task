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
        setData: (state, { title, invite }) => {
            state.title = title
            state.invite = invite
        }
    },
    actions: {
        getData: async ({ commit }) => {
            try {
                let response = await fetch(endpointURL);
                if (!response.ok) throw new Error(response.statusText)
                response = (await response.json())[0];
                commit('setData', {
                    title: response.title.rendered,
                    invite: response.content.rendered
                })
            } catch (error) {
                console.log("WELCOME GETDATA ERROR", error)
            }
        }
    }
}
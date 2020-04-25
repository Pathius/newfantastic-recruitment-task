export default {
  namespaced: true,
  state: {
    title: '',
    invite: '',
  },
  mutations: {
    setData: (state, { title, invite }) => {
      state.title = title;
      state.invite = invite;
    },
  },
};

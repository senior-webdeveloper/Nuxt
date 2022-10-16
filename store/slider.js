export const state = () => ({
  show: false,
  title: ""
});

export const mutations = {
  set(state, payload) {
    state.show = payload.show
    state.title = payload.title
  }
};

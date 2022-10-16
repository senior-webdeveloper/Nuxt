export const state = () => ({
  show: false,
  title: "",
  content: ""
});

export const mutations = {
  set(state, payload) {
    state.show = payload.show
    state.title = payload.title
    state.content = payload.content
  }
}

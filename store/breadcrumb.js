export const state = () => ({
    name: "",
  });
  
  export const mutations = {
    set(state, payload) {
      console.log("setting breadcrumb", payload)
      state.name = payload
    }
  }
  
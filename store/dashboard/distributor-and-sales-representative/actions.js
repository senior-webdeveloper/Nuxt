export default {
  getDistributorAndSalesRepresentatives({ commit }, payload) {
    commit("initialized", payload);
  },
  showSliderView({ commit }) {
    commit("showSliderView", {
      show: true,
      title: "",
      type: "view",
    });
  },
  hideSlider({ commit }) {
    commit("hideSlider", {
      show: false,
      title: "",
      type: "",
    });
  },
  hideNotification({ commit }) {
    commit("hideNotification", {
      show: false,
      title: "",
      content: "",
      type: "",
    });
  },
  getDistributorAndSalesRepresentative({ commit }, payload) {
    commit("getDistributorAndSalesRepresentative", payload);
  },
  updateDistributorAndSalesRepresentative({ commit }, payload) {
    commit("updateDistributorAndSalesRepresentative", payload);
  },
  deleteDistributorAndSalesRepresentative({ commit }) {
    commit("deleteDistributorAndSalesRepresentative");
  },
  showNotificationUpdate({ commit }, payload) {
    commit("updateNotification", payload);
  },
  setSlider({ commit }, payload) {
    commit('setSlider', payload)
  },
  pushDistributorAndSalesRepresentative({commit}, payload) {
    commit('pushDistributorAndSalesRepresentative', payload)
  }
};

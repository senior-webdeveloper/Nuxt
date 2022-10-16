export default {
  getRepairReturns({ commit }, payload) {
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
  getRepairReturn({ commit }, payload) {
    commit("getRepairReturn", payload);
  },
  updateRepairReturn({ commit }, payload) {
    commit("updateRepairReturn", payload);
  },
  deleteRepairReturn({ commit }) {
    commit("deleteRepairReturn");
  },
  showNotificationUpdate({ commit }, payload) {
    commit("updateNotification", payload);
  },
};

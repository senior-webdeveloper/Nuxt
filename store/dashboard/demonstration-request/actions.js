export default {
  getDemonstrationRequests({ commit }, payload) {
    commit("initialized", payload);
  },
  showSliderView({ commit }) {
    commit("showSliderView", {
      show: true,
      title: "View Demonstration Request",
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
  getDemonstrationRequest({ commit }, payload) {
    commit("getDemonstrationRequest", payload);
  },
  updateDemonstrationRequest({ commit }, payload) {
    commit("updateDemonstrationRequest", payload);
  },
  deleteDemonstrationRequest({ commit }) {
    commit("deleteDemonstrationRequest");
  },
  showNotificationUpdate({ commit }, payload) {
    commit("updateNotification", payload);
  },
};

export default {
  getDistributorshipApplications({ commit }, payload) {
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
  getDistributorshipApplication({ commit }, payload) {
    commit("getDistributorshipApplication", payload);
  },
  updateDistributorshipApplication({ commit }, payload) {
    commit("updateDistributorshipApplication", payload);
  },
  deleteDistributorshipApplication({ commit }) {
    commit("deleteDistributorshipApplication");
  },
  showNotificationUpdate({ commit }, payload) {
    commit("updateNotification", payload);
  },
};

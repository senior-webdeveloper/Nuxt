export default {
  getWarrantyRegistrations({ commit }, payload) {
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
  getWarrantyRegistration({ commit }, payload) {
    commit("getWarrantyRegistration", payload);
  },
  updateWarrantyRegistration({ commit }, payload) {
    commit("updateWarrantyRegistration", payload);
  },
  deleteWarrantyRegistration({ commit }) {
    commit("deleteWarrantyRegistration");
  },
  showNotificationUpdate({ commit }, payload) {
    commit("updateNotification", payload);
  },
};

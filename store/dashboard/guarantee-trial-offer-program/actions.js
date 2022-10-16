export default {
  getGuaranteeTrialOfferPrograms({ commit }, payload) {
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
  getGuaranteeTrialOfferProgram({ commit }, payload) {
    commit("getGuaranteeTrialOfferProgram", payload);
  },
  updateGuaranteeTrialOfferProgram({ commit }, payload) {
    commit("updateGuaranteeTrialOfferProgram", payload);
  },
  deleteGuaranteeTrialOfferProgram({ commit }) {
    commit("deleteGuaranteeTrialOfferProgram");
  },
  showNotificationUpdate({ commit }, payload) {
    commit("updateNotification", payload);
  },
};

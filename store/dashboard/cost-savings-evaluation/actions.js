export default {
  getCostSavingsEvaluations({ commit }, payload) {
    commit("initialized", payload);
  },
  showSliderView({ commit }) {
    commit("showSliderView", {
      show: true,
      title: "View Cost Savings Analysis",
      type: "view"
    });
  },
  showSliderViewEdit({ commit }) {
    commit("showSliderView", {
      show: true,
      title: "Edit Cost Savings Analysis",
      type: "edit"
    });
  },
  hideSlider({ commit }) {
    commit("hideSlider", {
      show: false,
      title: "",
      type: ""
    });
  },
  hideNotification({ commit }) {
    commit("hideNotification", {
      show: false,
      title: "",
      content: "",
      type: ""
    });
  },
  getCostSavingsEvaluation({ commit }, payload) {
    commit("getCostSavingsEvaluation", payload);
  },
  updateCostSavingsEvaluation({ commit }, payload) {
    commit("updateCostSavingsEvaluation", payload);
  },
  deleteCostSavingsEvaluation({ commit }) {
    commit("deleteCostSavingsEvaluation");
  },
  showNotificationUpdate({ commit }, payload) {
    commit("updateNotification", payload);
  }
};

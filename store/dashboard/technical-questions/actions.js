export default {
  getTechnicalQuestions({ commit }, payload) {
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
  getTechnicalQuestion({ commit }, payload) {
    commit("getTechnicalQuestion", payload);
  },
  updateTechnicalQuestion({ commit }, payload) {
    commit("updateTechnicalQuestion", payload);
  },
  deleteTechnicalQuestion({ commit }) {
    commit("deleteTechnicalQuestion");
  },
  showNotificationUpdate({ commit }, payload) {
    commit("updateNotification", payload);
  },
};

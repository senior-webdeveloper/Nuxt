export default {
  initialized(state, payload) {
    state.technicalQuestions = payload;
    state.slider.show = false;
    state.slider.title = "";
    state.slider.type = "";

    state.notification.show = false;
    state.notification.title = "";
    state.notification.type = "";
    state.notification.content = "";
  },
  showSliderView(state, payload) {
    state.slider = payload;
  },
  hideSlider(state, payload) {
    state.slider = payload;
  },
  hideNotification(state, payload) {
    state.notification = payload;
  },
  getTechnicalQuestion(state, payload) {
    state.technicalQuestion = payload;
  },
  updateTechnicalQuestion(state, payload) {
    var index = state.technicalQuestions.indexOf(state.technicalQuestion);

    state.technicalQuestions[index].status = payload.status;
  },
  deleteTechnicalQuestion(state) {
    var index = state.technicalQuestions.indexOf(state.technicalQuestion);
    state.technicalQuestions.splice(index, 1);
  },
  updateNotification(state, payload) {
    state.notification = payload;
  },
};

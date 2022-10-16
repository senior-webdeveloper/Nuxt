export default {
  initialized(state, payload) {
    state.guaranteeTrialOfferPrograms = payload;
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
  getGuaranteeTrialOfferProgram(state, payload) {
    state.guaranteeTrialOfferProgram = payload;
  },
  updateGuaranteeTrialOfferProgram(state, payload) {
    var index = state.guaranteeTrialOfferPrograms.indexOf(state.guaranteeTrialOfferProgram);

    state.guaranteeTrialOfferPrograms[index].status = payload.status;
    state.guaranteeTrialOfferPrograms[index].approved = payload.approved;
  },
  deleteGuaranteeTrialOfferProgram(state) {
    var index = state.guaranteeTrialOfferPrograms.indexOf(state.guaranteeTrialOfferProgram);
    state.guaranteeTrialOfferPrograms.splice(index, 1);
  },
  updateNotification(state, payload) {
    state.notification = payload;
  },
};

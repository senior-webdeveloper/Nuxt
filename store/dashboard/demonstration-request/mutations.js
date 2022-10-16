export default {
  initialized(state, payload) {
    state.demonstrationRequests = payload;
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
  getDemonstrationRequest(state, payload) {
    state.demonstrationRequest = payload;
  },
  updateDemonstrationRequest(state, payload) {
    var index = state.demonstrationRequests.indexOf(state.demonstrationRequest);

    state.demonstrationRequests[index].status = payload.status;
  },
  deleteDemonstrationRequest(state) {
    var index = state.demonstrationRequests.indexOf(state.demonstrationRequest);
    state.demonstrationRequests.splice(index, 1);
  },
  updateNotification(state, payload) {
    state.notification = payload;
  },
};

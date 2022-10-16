export default {
  initialized(state, payload) {
    state.warrantyRegistrations = payload;
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
  getWarrantyRegistration(state, payload) {
    state.warrantyRegistration = payload;
  },
  updateWarrantyRegistration(state, payload) {
    var index = state.warrantyRegistrations.indexOf(state.warrantyRegistration);

    state.warrantyRegistrations[index].status = payload.status;
  },
  deleteWarrantyRegistration(state) {
    var index = state.warrantyRegistrations.indexOf(state.warrantyRegistration);
    state.warrantyRegistrations.splice(index, 1);
  },
  updateNotification(state, payload) {
    state.notification = payload;
  },
};

export default {
  initialized(state, payload) {
    state.distributorshipApplications = payload;
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
  getDistributorshipApplication(state, payload) {
    state.distributorshipApplication = payload;
  },
  updateDistributorshipApplication(state, payload) {
    var index = state.distributorshipApplications.indexOf(state.distributorshipApplication);

    state.distributorshipApplications[index].status = payload.status;
    state.distributorshipApplications[index].approved = payload.approved;
    state.distributorshipApplications[index].updatedAt = payload.updatedAt;
  },
  deleteDistributorshipApplication(state) {
    var index = state.distributorshipApplications.indexOf(state.distributorshipApplication);
    state.distributorshipApplications.splice(index, 1);
  },
  updateNotification(state, payload) {
    state.notification = payload;
  },
};

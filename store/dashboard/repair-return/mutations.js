export default {
  initialized(state, payload) {
    state.repairReturns = payload;
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
  getRepairReturn(state, payload) {
    state.repairReturn = payload;
  },
  updateRepairReturn(state, payload) {
    var index = state.repairReturns.indexOf(state.repairReturn);

    state.repairReturns[index].status = payload.status;
    state.repairReturns[index].repairOrReturn = payload.repairOrReturn;
    state.repairReturns[index].updatedAt = payload.updatedAt;
  },
  deleteRepairReturn(state) {
    var index = state.repairReturns.indexOf(state.repairReturn);
    state.repairReturns.splice(index, 1);
  },
  updateNotification(state, payload) {
    state.notification = payload;
  },
};

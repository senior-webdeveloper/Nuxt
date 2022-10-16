export default {
  initialized(state, payload) {
    state.distributorAndSalesRepresentatives = payload;
    state.slider.show = false;
    state.slider.title = "";
    state.slider.type = "hide";

    state.notification.show = false;
    state.notification.title = "";
    state.notification.type = "";
    state.notification.content = "";
  },
  showSliderView(state, payload) {
    state.slider = {
      ...state.slider,
      ...payload
    }
  },
  hideSlider(state, payload) {
    state.slider = payload;
  },
  setSlider(state, payload) {
    state.slider = {
      ...state.slider,
      ...payload
    }
  },
  hideNotification(state, payload) {
    state.notification = payload;
  },
  getDistributorAndSalesRepresentative(state, payload) {
    state.distributorAndSalesRepresentative = payload;
  },
  updateDistributorAndSalesRepresentative(state, payload) {
    var index = state.distributorAndSalesRepresentatives.indexOf(
      state.distributorAndSalesRepresentative
    );

    state.distributorAndSalesRepresentatives.splice(index, 1, {...state.distributorAndSalesRepresentative, ...payload})
  },
  pushDistributorAndSalesRepresentative(state, payload) {
    state.distributorAndSalesRepresentatives.unshift(payload)
  },
  deleteDistributorAndSalesRepresentative(state) {
    var index = state.distributorAndSalesRepresentatives.indexOf(
      state.distributorAndSalesRepresentative
    );
    state.distributorAndSalesRepresentatives.splice(index, 1);
  },
  updateNotification(state, payload) {
    state.notification = payload;
  },
  setAction(state, payload) {
    state.action = payload
  }
};

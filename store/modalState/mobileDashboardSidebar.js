export const state = () => ({
   mobileDashboardSidebarState: false
});

export const getters = {
   getMobileDashboardSidebarState: (state) => state.mobileDashboardSidebarState
};

export const mutations = {
   UPDATE_MOBILE_DASHBOARD_SIDEBAR_STATUS(state, payload) {
      state.mobileDashboardSidebarState = payload
   }
};

export const actions = {
   setMobileDashboardSidebarStatus({commit}, payload) {
      commit('UPDATE_MOBILE_DASHBOARD_SIDEBAR_STATUS', payload)
   }
};


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabs: [
      { label: 'Home', folders: [] },
      { label: 'OneDrive', folders: [] },
    ],
    activeTab: 0,
  },

  getters: {
    tabs: (state) => state.tabs,
    activeTab: (state) => state.activeTab,
  },

  mutations: {
    SET_ACTIVE_TAB(state, index) {
      state.activeTab = index;
    },
    SET_TABS(state, tabs) {
      state.tabs = tabs;
    },
  },

  actions: {},
});

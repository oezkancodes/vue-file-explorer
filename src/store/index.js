import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabs: [
      { uid: '9b1deb4d', label: 'Home', folders: [] },
      { uid: '1b9d6bcd', label: 'OneDrive', folders: [] },
    ],
    activeTab: 0,
    minimized: false,
  },

  getters: {
    tabs: (state) => state.tabs,
    activeTab: (state) => state.activeTab,
    minimized: (state) => state.minimized,
  },

  mutations: {
    SET_ACTIVE_TAB(state, index) {
      state.activeTab = index;
    },
    SET_TABS(state, tabs) {
      state.tabs = tabs;
    },
    SET_TAB(state, tab) {
      state.tabs.push(tab);
    },
    SET_MINIMIZED(state, bool) {
      state.minimized = bool;
    },
  },

  actions: {},
});

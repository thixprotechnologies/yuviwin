// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    hiddenData: {
      state: {
        user: null,
        type: null
      },
      mutations: {
        setUser(state, payload) {
          state.user = payload;
        },
        setType(state, payload) {
          state.type = payload;
        }
      },
      actions: {
      },
      getters: {
      }
    }
  }
});

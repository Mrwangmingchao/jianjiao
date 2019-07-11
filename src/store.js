import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow: true,
    valuelist: []
  },
  mutations: {
    HideTabbar (state, data) {
      state.isTabbarShow = data
    },
    ShowTabbar (state, data) {
      state.isTabbarShow = data
    }
  },
  actions: {

  }
})

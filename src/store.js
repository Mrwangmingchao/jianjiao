import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow: true,
    id: 0,
    valuelist: []
  },
  mutations: {
    HideTabbar (state, data) {
      state.isTabbarShow = data
    },
    ShowTabbar (state, data) {
      state.isTabbarShow = data
    },
    changeId (state, data) {
      state.id = data
    }
  },
  actions: {

  }
})

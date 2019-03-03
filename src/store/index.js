import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: []
  },
  getters: {
    list (state) { return state.list }
  },
  mutations: {
    setInput (state, payload) {
      state.list = payload.list
    }
  },
  actions: {
    doUpdate ({ commit }, list) {
      commit('setInput', list)
    }
  }
})

export default store

const modal = {
  state: {
    modalFlag: false
  },
  getters: {
    modalFlag (state) { return state.modalFlag }
  },
  mutations: {
    setModalFlag (state, payload) {
      state.modalFlag = payload
    }
  },
  actions: {
    updateModalFlag ({ commit }, bool) {
      commit('setModalFlag', bool)
    }
  }
}

export default modal

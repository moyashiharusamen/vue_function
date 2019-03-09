const modal = {
  state: {
    modalFlag: false,
    modalNextFlag: false
  },
  getters: {
    modalFlag: (state) => state.modalFlag,
    modalNextFlag: (state) => state.modalNextFlag
  },
  mutations: {
    setModalFlag (state, bool) {
      state.modalFlag = bool
    },
    setModalNextFlag (state, bool) {
      state.modalNextFlag = bool
    }
  },
  actions: {
    updateModalFlag: ({ commit }, bool) => commit('setModalFlag', bool),
    updateModalNextFlag: ({ commit }, bool) => commit('setModalNextFlag', bool)
  }
}

export default modal

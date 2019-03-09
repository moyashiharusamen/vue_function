export default {
  state: {
    graphList: [
      {
        id: 1,
        price: 100
      }
    ],
    updateIndex: 0
  },
  getters: {
    graphList: (state) => state.graphList,
    updateIndex: (state) => state.updateIndex
  },
  mutations: {
    setGraphList (state, payload) {
      state.graphList[state.updateIndex].price = payload
    }
  },
  actions: {
    updateGraphList: ({ commit }, payload) => commit('setGraphList', payload)
  }
}

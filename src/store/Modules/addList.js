const addList = {
  state: {
    addList: [
      {
        id: 1,
        name: 'Ichiro Suzuki',
        bt: 'L/R',
        position: 'Out Fielder'
      },
      {
        id: 2,
        name: 'Hideki Matsui',
        bt: 'L/R',
        position: 'Out Fielder'
      },
      {
        id: 3,
        name: 'Hideo Nomo',
        bt: 'R/R',
        position: 'Pitcher'
      }
    ]
  },
  getters: {
    addList: (state) => state.addList,
    reverseAddList: (state) => state.addList.slice().reverse()
  },
  mutations: {
    setAddList (state, payload) {
      const addListLength = state.addList.length

      state.addList.push({
        id: addListLength + 1,
        name: payload.listName,
        bt: payload.listBt,
        position: payload.listPosition
      })
    }
  },
  actions: {
    updateAddList: ({ commit }, payload) => commit('setAddList', payload)
  }
}

export default addList

export default {
  namespaced: true,
  state: {
    priceList: [
      {
        carrot: 300,
        radish: 100,
        napa: 200
      }
    ]
  },
  getters: {
    priceList: (state) => state.priceList
  }
}

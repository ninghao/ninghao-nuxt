export const state = () => ({
  pageName: 'Vuex',
  count: 0
})

export const mutations = {
  add(state, number) {
    state.count = state.count + number
  }
}

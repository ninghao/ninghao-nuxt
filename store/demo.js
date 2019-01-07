export const state = () => ({
  pageName: 'Vuex',
  count: 0
})

export const mutations = {
  add(state, number) {
    state.count = state.count + number
  }
}

export const actions = {
  addAction(context, number) {
    setTimeout(() => {
      context.commit('add', number)
    }, 1000);
  }
}

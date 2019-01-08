export const state = () => ({
  list: []
})

export const mutations = {
  setList(state, list) {
    state.list = list
  }
}

export const actions = {
  async destroyAction(context, id) {
    await this.$axios.delete(`http://localhost:3333/posts/${id}`)
  }
}

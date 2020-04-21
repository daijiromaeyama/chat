export const state = () => ({
  message: null
})

export const getters = {
  // eslint-disable-next-line arrow-parens
  message: (state) => state.message
}

export const mutations = {
  setMessage(state, { message }) {
    state.message = message
  },

  deleteMessage(state) {
    state.message = null
  }
}

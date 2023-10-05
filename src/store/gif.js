import API from '@/api'

export const state = () => ({
  giphyData: null
})

export const getters = {
  getGiphyData (state) {
    return state.giphyData
  }
}

export const actions = {
  async searchGiphy ({ commit }, searchItem) {
    try {
      const response = await API.searchGiphy(searchItem)
      commit('SET_GIPHY_DATA', response)
    } catch (error) {
      console.log(error)
    }
  }
}

export const mutations = {
  SET_GIPHY_DATA (state, data) {
    state.giphyData = data
  }
}

export default {
  state,
  actions,
  mutations,
  namespaced: true
}

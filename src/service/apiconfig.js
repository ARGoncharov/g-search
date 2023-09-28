import axios from 'axios'
import store from '@/store'
export const BASE_URL = 'https://api.giphy.com/v1/gifs'
export const API_KEY = '1fsLx4csUmfXLMu9bw9bahch3ZaLiCou'

class APIService {
  constructor () {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      params: {
        api_key: API_KEY
      }
    })
  }

  async searchGiphy (searchItem) {
    try {
      const response = await this.axiosInstance.get('/search', {
        params: {
          q: searchItem
        }
      })
      store.dispatch('searchGiphy', response.data)
      return response.data
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default new APIService()

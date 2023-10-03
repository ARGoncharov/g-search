import axios from 'axios'
export const BASE_URL = 'https://api.giphy.com/v1/gifs'
export const API_KEY = '1fsLx4csUmfXLMu9bw9bahch3ZaLiCou'

class Index {
  constructor () {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      params: {
        api_key: API_KEY
      }
    })
  }

  get (url, options = {}) {
    return this.axiosInstance.get(url, options)
  }
}

export default new Index()

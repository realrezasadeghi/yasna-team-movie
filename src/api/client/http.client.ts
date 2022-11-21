import axios, { Axios } from 'axios'

export class HttpClient {
  private static instance: Axios

  static getInstance () {
    if (!HttpClient.instance) {
      HttpClient.instance = axios.create({
        baseURL: process.env.VUE_APP_BASE_URL_API,
        params: {
          api_key: process.env.VUE_APP_API_KEY
        }
      })
    }
    return HttpClient.instance
  }
}

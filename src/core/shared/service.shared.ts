import { Axios } from 'axios'
import { HttpClient } from '@/api/client'
import { RouteEnum } from '@/core'

export class Service {
  protected readonly http: Axios
  protected readonly baseUrl: typeof RouteEnum

  constructor () {
    this.http = HttpClient.getInstance()
    this.baseUrl = RouteEnum
  }
}

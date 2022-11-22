import {
  LoginInterfaceDto,
  LoginResultTypeModel,
  SessionIdInterfaceDto,
  RequestTokenResultTypeModel,
  SessionIdResultInterfaceModel
} from '@/api'
import { Service, ResponseType } from '@/core'

import { AuthInterface } from './auth.interface'

export class AuthService extends Service implements AuthInterface {
  async getRequestToken (): ResponseType<RequestTokenResultTypeModel> {
    const response = await this.http.get<RequestTokenResultTypeModel>(`${this.baseUrl.Authentication}/token/new`)
    return response.data
  }

  async login (request: LoginInterfaceDto): ResponseType<LoginResultTypeModel> {
    const response = await this.http.post<LoginResultTypeModel>(
      `${this.baseUrl.Authentication}/token/validate_with_login`,
      request)
    return response.data
  }

  async createSessionId (request: SessionIdInterfaceDto): ResponseType<SessionIdResultInterfaceModel> {
    const response = await this.http.post(`${this.baseUrl.Authentication}/session/new`, request)
    return response.data
  }
}

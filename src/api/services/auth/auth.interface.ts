import { ResponseType } from '@/core'
import {
  LoginInterfaceDto,
  LoginResultTypeModel,
  RequestTokenResultTypeModel, SessionIdInterfaceDto,
  SessionIdResultInterfaceModel
} from '@/api/models'

export interface AuthInterface {
  getRequestToken (): ResponseType<RequestTokenResultTypeModel>

  login (request: LoginInterfaceDto): ResponseType<LoginResultTypeModel>

  createSessionId (request: SessionIdInterfaceDto): ResponseType<SessionIdResultInterfaceModel>
}

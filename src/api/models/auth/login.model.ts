import { AuthModel } from './auth.model'

export type LoginResultTypeModel = AuthModel

export interface LoginInterfaceDto {
  username: string,
  password: string,
  request_token: string
}

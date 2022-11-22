import { Service, ResponseType } from '@/core'
import { AccountInterfaceDto, AccountResultInterfaceModel } from '@/api'

import { AccountInterface } from './account.interface'

export class AccountService extends Service implements AccountInterface {
  async getDetailsAccount (request: AccountInterfaceDto): ResponseType<AccountResultInterfaceModel> {
    const response = await this.http.get(`${this.baseUrl.Account}`, { params: { ...request } })
    return response.data
  }
}

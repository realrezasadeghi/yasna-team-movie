import { ResponseType } from '@/core'
import { AccountInterfaceDto, AccountResultInterfaceModel } from '@/api'

export interface AccountInterface {
  getDetailsAccount: (request: AccountInterfaceDto) => ResponseType<AccountResultInterfaceModel>
}

import { useQuery, UseQueryOptions } from 'vue-query'
import { ErrorType, QueryKeyEnum } from '@/core'
import { AccountService } from '@/api/services/account'
import { AccountInterfaceDto, AccountResultInterfaceModel } from '@/api'

type TError = ErrorType
type TData = AccountResultInterfaceModel
type Options = UseQueryOptions<TData, TError>

export const useGetDetailsAccountAPI = (request: AccountInterfaceDto, options?: Options) => {
  const service = new AccountService()
  return useQuery<TData, TError>(
    [QueryKeyEnum.GET_DETAILS_ACCOUNT, request.session_id],
    async () => await service.getDetailsAccount(request), { ...options })
}

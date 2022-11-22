import { useQuery } from 'vue-query'
import { ErrorType, QueryKeyEnum } from '@/core'
import { AuthService, RequestTokenResultTypeModel } from '@/api'

type TData = RequestTokenResultTypeModel
type TError = ErrorType
export const useGetRequestTokenAPI = () => {
  const service = new AuthService()
  return useQuery<TData, TError>(
    [QueryKeyEnum.GET_REQUEST_TOKEN],
    async () => await service.getRequestToken())
}

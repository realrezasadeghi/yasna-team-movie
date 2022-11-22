import { AuthService, LoginInterfaceDto, LoginResultTypeModel } from '@/api'
import { useMutation, UseMutationOptions } from 'vue-query'
import { ErrorType } from '@/core'

type TError = ErrorType
type TData = LoginResultTypeModel
type TVariables = LoginInterfaceDto
type Options = UseMutationOptions<TData, TError, TVariables, any>

export const useLoginAPI = (options?: Options) => {
  const service = new AuthService()
  return useMutation<TData, TError, TVariables>(
    async (request) => await service.login(request),
    { ...options })
}

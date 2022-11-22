import { ErrorType } from '@/core'
import { useMutation, UseMutationOptions } from 'vue-query'
import { AuthService, SessionIdInterfaceDto, SessionIdResultInterfaceModel } from '@/api'

type TError = ErrorType
type TVariables = SessionIdInterfaceDto
type TData = SessionIdResultInterfaceModel
type Options = UseMutationOptions<TData, TError, TVariables, any>

export const useCreateSessionIdAPI = (options?: Options) => {
  const service = new AuthService()
  return useMutation<TData, TError, TVariables>(
    async (request) => await service.createSessionId(request),
    { ...options }
  )
}

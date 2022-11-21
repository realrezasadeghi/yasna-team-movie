import { useQuery } from 'vue-query'
import { ErrorType, QueryKeyEnum } from '@/core'
import { ListMovieModel, MovieService } from '@/api'

type TError = ErrorType;
type TData = ListMovieModel;

export const useGetListMovieAPI = () => {
  const service = new MovieService()
  return useQuery<TData, TError>(
    [QueryKeyEnum.GET_LIST_MOVIE],
    async () => await service.getListMovie())
}

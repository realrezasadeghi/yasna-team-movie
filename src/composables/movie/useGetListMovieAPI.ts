import { useQuery } from 'vue-query'
import { ErrorType, QueryKeyEnum } from '@/core'
import { ListMovieDto, ListMovieModel, MovieService } from '@/api'

type TError = ErrorType;
type TData = ListMovieModel;

export const useGetListMovieAPI = (request: ListMovieDto) => {
  const service = new MovieService()
  return useQuery<TData, TError>(
    [QueryKeyEnum.GET_LIST_MOVIE],
    async () => await service.getListMovie(request))
}

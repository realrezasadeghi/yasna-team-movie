import { useQuery } from 'vue-query'
import { ErrorType, QueryKeyEnum } from '@/core'
import { ListMovieByPaginationDto, ListMovieModel, MovieService } from '@/api'

type TError = ErrorType;
type TData = ListMovieModel;
type TVariable = ListMovieByPaginationDto;

export const useGetListMovieByPaginationAPI = (request: ListMovieByPaginationDto) => {
  const service = new MovieService()
  return useQuery<TData, TError, TVariable>(
    [QueryKeyEnum.GET_LIST_MOVIE_BY_PAGINATION, request.page],
    async () => await service.getListMovieByPagination(request)
  )
}

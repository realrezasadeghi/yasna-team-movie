import { useQuery } from 'vue-query'
import { ErrorType, QueryKeyEnum } from '@/core'
import { MovieDetailDto, MovieDetailModel, MovieService } from '@/api'

type TError = ErrorType;
type TData = MovieDetailModel;
type TVariable = MovieDetailDto;

export const UseGetMovieDetailByIdAPI = (request: MovieDetailDto) => {
  const service = new MovieService()
  return useQuery<TData, TError, TVariable>(
    [QueryKeyEnum.GET_MOVIE_DETAIL_BY_ID, request.movieId],
    async () => await service.getMovieDetailById(request))
}

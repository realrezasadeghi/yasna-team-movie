import { ResponseType } from '@/core'
import { ListMovieByPaginationDto, MovieDetailModel } from '@/api'
import { ListMovieBySearchDateDto, ListMovieModel, MovieDetailDto } from '@/api/models/movie'

export interface MovieInterface {
  getListMovie (): ResponseType<ListMovieModel>

  getMovieDetailById (request: MovieDetailDto): ResponseType<MovieDetailModel>

  getListMovieByPagination (request: ListMovieByPaginationDto): ResponseType<ListMovieModel>

  getListMovieBySearchDate (request: ListMovieBySearchDateDto): ResponseType<ListMovieModel>
}

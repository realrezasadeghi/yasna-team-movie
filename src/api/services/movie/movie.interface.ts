import { ResponseType } from '@/core'
import { ListMovieDto, MovieDetailModel } from '@/api'
import { ListMovieModel, MovieDetailDto } from '@/api/models/movie'

export interface MovieInterface {
  getListMovie (request: ListMovieDto): ResponseType<ListMovieModel>

  getMovieDetailById (request: MovieDetailDto): ResponseType<MovieDetailModel>
}

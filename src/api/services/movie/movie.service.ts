import {
  ListMovieDto,
  ListMovieModel,
  MovieDetailDto,
  MovieDetailModel
} from '@/api/models'
import { ResponseType, Service } from '@/core'

import { MovieInterface } from './movie.interface'

export class MovieService extends Service implements MovieInterface {
  async getListMovie (request: ListMovieDto): ResponseType<ListMovieModel> {
    const response = await this.http.get<ListMovieModel>(
      `${this.baseUrl.Discover}/movie`,
      { params: { ...request } }
    )
    return response.data
  }

  async getMovieDetailById (request: MovieDetailDto): ResponseType<MovieDetailModel> {
    const response = await this.http.get(`${this.baseUrl.Movie}/${request.movieId}`)
    return response.data
  }
}

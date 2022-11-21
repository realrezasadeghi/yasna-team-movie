import {
  ListMovieByPaginationDto,
  ListMovieBySearchDateDto,
  ListMovieModel,
  MovieDetailDto,
  MovieDetailModel
} from '@/api/models'
import { ResponseType, Service } from '@/core'

import { MovieInterface } from './movie.interface'

export class MovieService extends Service implements MovieInterface {
  async getListMovie (): ResponseType<ListMovieModel> {
    const response = await this.http.get<ListMovieModel>(`${this.baseUrl.Discover}/movie`)
    return response.data
  }

  async getMovieDetailById (request: MovieDetailDto): ResponseType<MovieDetailModel> {
    const response = await this.http.get(`${this.baseUrl.Movie}/${request.movieId}`)
    return response.data
  }

  async getListMovieByPagination (request: ListMovieByPaginationDto): ResponseType<ListMovieModel> {
    const response = await this.http.get(`${this.baseUrl.Discover}`, { params: { page: request.page } })
    return response.data
  }

  async getListMovieBySearchDate (request: ListMovieBySearchDateDto): ResponseType<ListMovieModel> {
    const response = await this.http.get<ListMovieModel>(`${this.baseUrl.Discover}/movie`, {
      params: { ...request }
    })
    return response.data
  }
}

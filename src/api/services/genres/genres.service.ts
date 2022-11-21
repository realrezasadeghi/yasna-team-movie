import { GenresModelResultModel } from '@/api'
import { Service, ResponseType } from '@/core'

import { GenresInterface } from './genres.interface'

export class GenresService extends Service implements GenresInterface {
  async getListGenres (): ResponseType<GenresModelResultModel> {
    const response = await this.http.get<GenresModelResultModel>(`${this.baseUrl.Genre}/movie/list`)
    return response.data
  }
}

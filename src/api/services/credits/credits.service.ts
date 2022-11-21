import { Service, ResponseType } from '@/core'
import { CreditsInterfaceDto, CreditsResultMovieModel } from '@/api/models/credits'

import { CreditsInterface } from './credits.interface'

export class CreditsService extends Service implements CreditsInterface {
  async getCreditsByMovieId (request: CreditsInterfaceDto): ResponseType<CreditsResultMovieModel> {
    const response = await this.http.get(`${this.baseUrl.Movie}/${request.movieId}/credits`)
    return response.data
  }
}

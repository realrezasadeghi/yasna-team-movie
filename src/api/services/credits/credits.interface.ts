import { ResponseType } from '@/core'
import { CreditsInterfaceDto, CreditsResultMovieModel } from '@/api/models/credits'

export interface CreditsInterface {
  getCreditsByMovieId (request: CreditsInterfaceDto): ResponseType<CreditsResultMovieModel>
}

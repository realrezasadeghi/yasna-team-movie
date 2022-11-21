import { GenresModelResultModel } from '@/api'
import { ResponseType } from '@/core'

export interface GenresInterface {
  getListGenres (): ResponseType<GenresModelResultModel>
}

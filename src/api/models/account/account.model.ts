export interface AccountResultInterfaceModel {
  id?: number
  name?: string
  username?: string
  iso_639_1?: string
  iso_3166_1?: string
  include_adult?: boolean,
  avatar: {
    gravatar: {
      hash: string
    },
    tmdb: {
      avatar_path: string
    }
  }
}

export interface AccountInterfaceDto {
  session_id: string
}

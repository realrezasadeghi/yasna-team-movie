export interface GenresModel {
  id: number;
  name: string;
}

export interface GenresModelResultModel {
  genres: Array<GenresModel>
}

export interface MovieModel {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<string>;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface ListMovieModel {
  page: number;
  results: Array<MovieModel>;
  total_results: number;
  total_pages: number;
}

export interface ListMovieBySearchDateDto {
  releaseDateEnd: string,
  releaseDateStart: string,
}

export interface ListMovieByPaginationDto {
  page: number
}

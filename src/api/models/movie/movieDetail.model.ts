import { Status } from '@/core'
import { GenresModel } from '@/api/models'

export interface MovieDetailDto {
  movieId: number
}

interface ProductionCompanies {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguages {
  iso_639_1: string;
  name: string;
}

export interface MovieDetailModel {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: Array<GenresModel>;
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  origianl_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<ProductionCompanies>;
  production_countries: Array<ProductionCountries>;
  release_date: string | Date;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<SpokenLanguages>;
  status: Status;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

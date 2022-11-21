interface BaseCredit {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
}

export interface Cast extends BaseCredit {
  cast_id: number;
  character: string;
  order: number;
}

interface Crew extends BaseCredit {
  job: string;
  department: string;
}

export interface CreditsResultMovieModel {
  id: number;
  cast: Array<Cast>;
  crew: Array<Crew>;
}

export interface CreditsInterfaceDto {
  movieId: number
}

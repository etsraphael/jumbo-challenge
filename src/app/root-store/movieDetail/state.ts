import { Movie } from 'src/app/core/services/movies/movies.service';

export interface State {
  movie: Movie;
  isLoading?: boolean;
  error?: string
}

export const initialState: State = {
  movie: null,
  isLoading: false,
  error: null,
};

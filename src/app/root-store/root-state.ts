import { MoviesListStoreState } from './moviesList';
import { MovieStoreState } from './movieDetail';

export interface State {
    moviesList: MoviesListStoreState.State
    movie: MovieStoreState.State
}
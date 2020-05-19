import { MoviesListStoreState } from './moviesList';
import { MovieStoreState } from './movieDetail';
import { SearchingListStoreState } from './searchingList';

export interface State {
    moviesList: MoviesListStoreState.State
    movie: MovieStoreState.State
    searchingList: SearchingListStoreState.State
}
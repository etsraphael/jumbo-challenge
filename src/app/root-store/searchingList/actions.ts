import { Action } from '@ngrx/store';
import { Movies } from 'src/app/core/services/movies/movies.service';


export enum ActionTypes {

    GET_SEARCHING_MOVIE = '@searching_movie/get_success',
    RESET_SEARCHING_MOVIES = '@movie/movie'

}

export class ResetMovies implements Action {
    readonly type = ActionTypes.RESET_SEARCHING_MOVIES
}

export class GetSearchingMovie implements Action {
    readonly type = ActionTypes.GET_SEARCHING_MOVIE
    constructor(public payload: Movies[]) { }
}

export type ActionsSearchingList =
    | GetSearchingMovie
    | ResetMovies

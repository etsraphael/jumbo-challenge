import { Action } from '@ngrx/store';
import { Movies } from 'src/app/core/services/movies/movies.service';


export enum ActionTypes {

    GET_POPULAR_MOVIE = '@popular_movie/get',
    GET_POPULAR_MOVIE_SUCCESS = '@popular_movie/get_success',
    GET_POPULAR_MOVIE_FAIL = '@popular_movie/getfail',

    RESET_MOVIES = '@movie/movie'

}

export class ResetMovies implements Action {
    readonly type = ActionTypes.RESET_MOVIES
}

export class GetPopularMovie implements Action {
    readonly type = ActionTypes.GET_POPULAR_MOVIE
    constructor(public page: number) { }
}

export class GetPopularMovieSuccess implements Action {
    readonly type = ActionTypes.GET_POPULAR_MOVIE_SUCCESS
    constructor(public payload: Movies[]) { }
}

export class GetPopularMovieFail implements Action {
    readonly type = ActionTypes.GET_POPULAR_MOVIE_FAIL
    constructor(public payload: any) { }
}



export type ActionsMoviesList =
    | GetPopularMovie
    | GetPopularMovieSuccess
    | GetPopularMovieFail
    | ResetMovies

import { Action } from '@ngrx/store';
import { Movie } from 'src/app/core/services/movies/movies.service';

export enum ActionTypes {

    GET_MOVIE_DETAIL = '@movie_detail/get',
    GET_MOVIE_DETAIL_SUCCESS = '@movie_detail/get_success',
    GET_MOVIE_DETAIL_FAIL = '@movie_detail/getfail',

    RESET_MOVIE = '@movie/reset'
}

export class ResetMovies implements Action {
    readonly type = ActionTypes.RESET_MOVIE
}

export class GetMovieDetail implements Action {
    readonly type = ActionTypes.GET_MOVIE_DETAIL
    constructor(public id: string) { }
}

export class GetMovieDetailSuccess implements Action {
    readonly type = ActionTypes.GET_MOVIE_DETAIL_SUCCESS
    constructor(public payload: Movie) { }
}

export class GetMovieDetailFail implements Action {
    readonly type = ActionTypes.GET_MOVIE_DETAIL_FAIL
    constructor(public payload: any) { }
}

export type ActionsMovie =
    | GetMovieDetail
    | GetMovieDetailSuccess
    | GetMovieDetailFail
    | ResetMovies

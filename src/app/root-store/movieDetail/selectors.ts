import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';
import { Movie } from 'src/app/core/services/movies/movies.service';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const getMovie = (state: State): Movie => state.movie;

export const selectState: MemoizedSelector<object, State>
    = createFeatureSelector<State>('MovieDetail');

export const select: MemoizedSelector<object, Movie>
    = createSelector(selectState, getMovie)

export const selectError: MemoizedSelector<object, any>
    = createSelector(selectState, getError);

export const selectLoading: MemoizedSelector<object, boolean>
    = createSelector(selectState, getIsLoading);

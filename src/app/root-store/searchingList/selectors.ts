import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { featureAdapter, State } from './state';
import { Movies } from 'src/app/core/services/movies/movies.service';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectState: MemoizedSelector<object, State>
    = createFeatureSelector<State>('SearchingList');

export const selectAllItems: (state: object)
    => Movies[] = featureAdapter.getSelectors(selectState).selectAll;

export const selectError: MemoizedSelector<object, any>
    = createSelector(selectState, getError);

export const selectLoading: MemoizedSelector<object, boolean>
    = createSelector(selectState, getIsLoading);

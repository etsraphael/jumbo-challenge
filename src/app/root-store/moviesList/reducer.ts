import { ActionsMoviesList, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';

export function featureReducer(state = initialState, action: ActionsMoviesList): State {
  switch (action.type) {
    case ActionTypes.GET_POPULAR_MOVIE: {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case ActionTypes.GET_POPULAR_MOVIE_SUCCESS: {
      return featureAdapter.addMany(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.GET_POPULAR_MOVIE_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    case ActionTypes.RESET_MOVIES: return initialState
    default: return state
  }
}

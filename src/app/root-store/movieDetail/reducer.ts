import { ActionsMovie, ActionTypes } from './actions';
import { initialState, State } from './state';

export function featureReducer(state = initialState, action: ActionsMovie): State {
  switch (action.type) {
    case ActionTypes.GET_MOVIE_DETAIL: {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case ActionTypes.GET_MOVIE_DETAIL_SUCCESS: {
      return {
        ...state,
        movie: action.payload,
        isLoading: false,
        error: null
      }
    }
    case ActionTypes.GET_MOVIE_DETAIL_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    case ActionTypes.RESET_MOVIE: return initialState
    default: return state
  }
}

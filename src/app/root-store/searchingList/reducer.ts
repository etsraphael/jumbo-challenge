import { ActionsSearchingList, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';

export function featureReducer(state = initialState, action: ActionsSearchingList): State {
  switch (action.type) {
    case ActionTypes.GET_SEARCHING_MOVIE: {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case ActionTypes.RESET_SEARCHING_MOVIES: return initialState
    default: return state
  }
}

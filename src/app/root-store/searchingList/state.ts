import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Movies } from 'src/app/core/services/movies/movies.service';

export const featureAdapter: EntityAdapter<Movies> = createEntityAdapter<Movies>({
  selectId: model => model.id
});

export interface State extends EntityState<Movies> {
  isLoading?: boolean
  error?: any
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null,
  }
)

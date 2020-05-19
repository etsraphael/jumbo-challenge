import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { map, switchMap, catchError } from 'rxjs/operators'
import { Observable, of as observableOf } from 'rxjs'
import * as featureActions from './actions'
import { ActionsMoviesList } from './actions'
import { MoviesService } from 'src/app/core/services/movies/movies.service'

@Injectable()
export class MoviesListStoreEffects {

  constructor(
    private dataService: MoviesService,
    private actions$: Actions
  ) { }

  @Effect()
  getMoviesList: Observable<ActionsMoviesList> = this.actions$.pipe(
    ofType<featureActions.GetPopularMovie>(featureActions.ActionTypes.GET_POPULAR_MOVIE),
    switchMap(action => this.dataService.getMostPopularMovies(action.page).pipe(
      map(items => new featureActions.GetPopularMovieSuccess(items.results)),
      catchError(error => observableOf(new featureActions.GetPopularMovieFail(error)))
    ))
  )

}



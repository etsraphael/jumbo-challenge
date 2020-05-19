import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { map, switchMap, catchError } from 'rxjs/operators'
import { Observable, of as observableOf } from 'rxjs'
import * as featureActions from './actions'
import { ActionsMovie } from './actions'
import { MoviesService } from 'src/app/core/services/movies/movies.service'

@Injectable()
export class MovieStoreEffects {

  constructor(
    private dataService: MoviesService,
    private actions$: Actions
  ) { }

  @Effect()
  getMoviesList: Observable<ActionsMovie> = this.actions$.pipe(
    ofType<featureActions.GetMovieDetail>(featureActions.ActionTypes.GET_MOVIE_DETAIL),
    switchMap(action => this.dataService.getMovieDetail(action.id).pipe(
      map(item => new featureActions.GetMovieDetailSuccess(item)),
      catchError(error => observableOf(new featureActions.GetMovieDetailFail(error)))
    ))
  )

}



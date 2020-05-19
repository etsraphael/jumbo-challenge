import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../core/services/movies/movies.service';
import { Store, select } from '@ngrx/store';
import { RootStoreState, MovieStoreActions, MovieStoreSelectors } from '../root-store';
import { ActivatedRoute } from '@angular/router';
import { filter, skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

export class MovieDetailComponent implements OnInit {

  // movies
  movie$: Observable<Movie>
  error$: Observable<any>
  loading$: Observable<boolean>

  constructor(
    private store$: Store<RootStoreState.State>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    // download the movie detail
    this.store$.dispatch(new MovieStoreActions.GetMovieDetail(this.route.snapshot.paramMap.get('id')))

    // select the movie
    this.movie$ = this.store$.pipe(
      select(MovieStoreSelectors.select),
      filter(value => value !== undefined),
      skipWhile(val => val == null)
    )

  }


  timeConvert(n: number) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s)";
  }

}

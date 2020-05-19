import { Component, OnInit } from '@angular/core';
import { RootStoreState, MoviesListStoreActions, MoviesListStoreSelectors } from '../root-store';
import { Movies } from '../core/services/movies/movies.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store'
import { filter, skipWhile, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  // search bar
  searchField: FormControl;

  // movies
  movies$: Observable<Movies[]>
  error$: Observable<any>
  loading$: Observable<boolean>

  constructor(
    private store$: Store<RootStoreState.State>,
  ) { }

  ngOnInit() {

    this.store$.dispatch(new MoviesListStoreActions.GetPopularMovie(1))


    this.movies$ = this.store$.pipe(
      select(MoviesListStoreSelectors.selectAllItems),
      filter(value => value !== undefined),
      skipWhile(val => val.length == 0)
    )

    // search
    this.searchField = new FormControl();
    this.searchField.valueChanges.pipe(debounceTime(200), distinctUntilChanged())

    this.searchField.valueChanges
      .pipe(
        filter(value => value !== undefined),
        filter(value => value !== ''),
        filter(value => value.length > 2),
        debounceTime(200),
        distinctUntilChanged()
      ).subscribe(val => {
        console.log(val)
      }
      )


  }

}

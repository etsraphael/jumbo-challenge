import { Component, OnInit, OnDestroy } from '@angular/core';
import { RootStoreState, MoviesListStoreActions, MoviesListStoreSelectors, SearchingListStoreActions, SearchingListStoreSelectors } from '../root-store';
import { Movies, MoviesService } from '../core/services/movies/movies.service';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store'
import { filter, skipWhile, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  // search bar
  searchField: FormControl;
  searchSub: Subscription

  // movies
  movies$: Observable<Movies[]>
  error$: Observable<any>
  loading$: Observable<boolean>

  // movies
  Searchmovies$: Observable<Movies[]>
  Searcherror$: Observable<any>
  Searchloading$: Observable<boolean>


  constructor(
    private store$: Store<RootStoreState.State>,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {

    this.store$.dispatch(new MoviesListStoreActions.GetPopularMovie(1))

    this.movies$ = this.store$.pipe(
      select(MoviesListStoreSelectors.selectAllItems),
      filter(value => value !== undefined),
      skipWhile(val => val.length == 0)
    )

    this.Searchmovies$ = this.store$.pipe(
      select(SearchingListStoreSelectors.selectAllItems),
      filter(value => value !== undefined),
      skipWhile(val => val.length == 0)
    )

    this.Searchmovies$.subscribe(console.log)




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
      ).subscribe(val => { this.search(val) })
  }


  search(name: string) {
    this.searchSub = this.moviesService.searchMovie(name).subscribe(

      action => {
        this.store$.dispatch(new SearchingListStoreActions.GetSearchingMovie(action.results))


      },

      error => {
        alert('A error was occured')
      }
    )
  }

  ngOnDestroy(): void {
    if (this.searchSub) this.searchSub.unsubscribe()
  }

}

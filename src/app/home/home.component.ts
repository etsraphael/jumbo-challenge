import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, MoviesListStoreActions } from '../root-store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(
    private store$: Store<RootStoreState.State>,
  ) { }

  ngOnInit() {

    this.store$.dispatch(new MoviesListStoreActions.GetPopularMovie(1))

  }

}

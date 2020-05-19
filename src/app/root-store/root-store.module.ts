import { StoreModule } from '@ngrx/store'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesListStoreModule } from './moviesList'


@NgModule({
  declarations: [],
  providers: [],
  imports: [
    CommonModule,
    MoviesListStoreModule,
    StoreModule.forRoot({})
  ],
})

export class RootStoreModule { }

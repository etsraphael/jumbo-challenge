import { StoreModule } from '@ngrx/store'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesListStoreModule } from './moviesList'
import { EffectsModule } from '@ngrx/effects'


@NgModule({
  declarations: [],
  providers: [],
  imports: [
    CommonModule,
    MoviesListStoreModule,
    StoreModule.forRoot({}), 
    EffectsModule.forRoot([])
  ],
})

export class RootStoreModule { }

import { StoreModule } from '@ngrx/store'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment'

import { MovieStoreModule } from './movieDetail'
import { MoviesListStoreModule } from './moviesList'

@NgModule({
  declarations: [],
  providers: [],
  imports: [
    CommonModule,
    MoviesListStoreModule,
    MovieStoreModule,
    StoreModule.forRoot({}), 
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
})

export class RootStoreModule { }

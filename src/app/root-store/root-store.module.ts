import { StoreModule } from '@ngrx/store'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesListStoreModule } from './moviesList'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment'


@NgModule({
  declarations: [],
  providers: [],
  imports: [
    CommonModule,
    MoviesListStoreModule,
    StoreModule.forRoot({}), 
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
})

export class RootStoreModule { }

import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { featureReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { MoviesListStoreEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('MoviesList', featureReducer),
    EffectsModule.forFeature([MoviesListStoreEffects])
  ],
  providers: [MoviesListStoreEffects]
})
export class MoviesListStoreModule { }

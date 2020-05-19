import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { featureReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovieStoreEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('MovieDetail', featureReducer),
    EffectsModule.forFeature([MovieStoreEffects])
  ],
  providers: [MovieStoreEffects]
})

export class MovieStoreModule { }

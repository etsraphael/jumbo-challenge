import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { featureReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchingListStoreEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('SearchingList', featureReducer),
    EffectsModule.forFeature([SearchingListStoreEffects])
  ],
  providers: [SearchingListStoreEffects]
})
export class SearchingListStoreModule { }

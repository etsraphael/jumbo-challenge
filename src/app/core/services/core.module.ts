import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { MoviesService } from './movies/movies.service'

@NgModule({
  imports: [ CommonModule,  HttpClientModule, ReactiveFormsModule ],
  providers: [ MoviesService ],
  declarations: []
})

export class CoreModule { }

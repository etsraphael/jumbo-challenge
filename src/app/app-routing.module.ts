import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


const routes: Routes = [

  // default
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // home
  { path: 'home', component: HomeComponent },

  // movie details
  { path: 'movies/:id', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

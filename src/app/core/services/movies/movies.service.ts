import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {
 
  token = environment.api_token
  baseUrl = environment.baseUrl
  
  constructor(private http: HttpClient) { }

  getMostPopularMovies(page: number): Observable<ListMoviesReponse>  {
    return this.http.get<ListMoviesReponse>(`${this.baseUrl}/popular/?api_key=${this.token}&language=en-US&page=${page}`);
  }
}

export class ListMoviesReponse {
  page: number
  total_results: number
  total_pages: number
  results: Movies[]
}

export class Movies {
  popularity: number
  vote_count: number
  video: boolean
  poster_path: string
  id: string
  adult: boolean
  backdrop_path:string
  original_language: string
  original_title: string
  genre_ids: [ number, number ]
  title: string
  vote_average: number
  overview: string
  release_date: Date
}
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

  getMostPopularMovies(page: number): Observable<ListMoviesReponse> {
    return this.http.get<ListMoviesReponse>(`${this.baseUrl}/movie/popular?api_key=${this.token}&language=en-US&page=${page}`);
  }

  getMovieDetail(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.token}&language=en-US`);
  }

  searchMovie(name: string): Observable<ListMoviesReponse> {
    return this.http.get<ListMoviesReponse>(`${this.baseUrl}/search/movie?api_key=${this.token}&language=en-US&query=${name}`);
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
  backdrop_path: string
  original_language: string
  original_title: string
  genre_ids: [number, number]
  title: string
  vote_average: number
  overview: string
  release_date: Date
}

export class Movie {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: string
  budget: number
  homepage: string
  id: string
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  status: string
  tagline: string
  video: boolean
  vote_average: number
  vote_count: number
}
/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
MovieSearchComponent
*/
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Movie } from '../../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movies$: Observable<Movie[]>;
  private searchedSubject = new Subject<string>();

  constructor(private movieService: MovieService) { }
  search(searchedString: string): void {    
    console.log(`searchedString = ${searchedString}`);
    this.searchedSubject.next(searchedString);
  }

  ngOnInit() {
    this.movies$ = this.searchedSubject.pipe(
      debounceTime(300), // wait 300ms after each keystroke before considering the searched string
      distinctUntilChanged(),// ignore new string if same as previous string
      switchMap((searchedString: string) => this.movieService.searchMovies(searchedString))
    );
  }

}

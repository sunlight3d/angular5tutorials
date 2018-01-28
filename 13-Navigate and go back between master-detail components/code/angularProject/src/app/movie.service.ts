/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Services could get data from server, create fake data, get data from local storage
*/
import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movies';
import { Movie } from '../models/movie';

//Get data asynchronously with Observable
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

//MessageService
import { MessageService } from './message.service';

@Injectable()
export class MovieService {
  getMovies(): Observable<Movie[]> {
    this.messageService.add(`${ new Date().toLocaleString()}. Get movie list`);
    return of(fakeMovies);
  }
  getMovieFromId(id: number): Observable<Movie> {    
    return of(fakeMovies.find(movie => movie.id === id));
  }
  constructor(public messageService: MessageService) { }

}

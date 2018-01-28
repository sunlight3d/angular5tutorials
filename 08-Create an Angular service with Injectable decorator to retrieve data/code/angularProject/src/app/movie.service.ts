/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Services could get data from server, create fake data, get data from local storage
*/
import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movies';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
  getMovies(): Movie[] {
    return fakeMovies;
  }
  constructor() { }

}

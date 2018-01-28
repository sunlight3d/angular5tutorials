/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Movies Component
*/
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { fakeMovies } from '../fake-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: "Star Wars",
    releaseYear: 1977
  }
  movies = fakeMovies;
  constructor() { }

  ngOnInit() {

  }
  //Action when select a Movie in List item
  selectedMovie: Movie;
  onSelect(movie: Movie): void {
      this.selectedMovie = movie;
      console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
      // alert(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }

}

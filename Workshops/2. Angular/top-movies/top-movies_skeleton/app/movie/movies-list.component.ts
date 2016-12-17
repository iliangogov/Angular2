import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../core/models/movie.model';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'mvdb-movie-list',
    templateUrl: './movie-list.component.html',
    styles: [
        '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
    ]
})
export class MovieListComponent {
    @Input() movies: Movie[];
    http: Http;
    constructor(http: Http) {
        this.http = http;
        this.movies = [];
    }
    ngOnInit() {
        var result = this.http.get('../data/movies.json')
            .map((res: Response) => res.json()) // Map will change your response ot json()
            .subscribe(moviesJson => this.movies.push(...moviesJson))
        // research how to populate the movies in **this.movies**
    };

    SearchByTitle(value:any){
       // console.log(value);
         let result=[].concat(this.movies);
         return result.filter(m=>m.Title.indexOf(value)>0); 
    }
}
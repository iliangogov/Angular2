import { Component, Input } from '@angular/core';
import { Movie } from '../core/models/movie.model';

@Component({
    selector: '[mvdb-movie-short]',
    templateUrl: './movie-short.component.html'
})
export class MovieShortComponent {
    @Input() movie: Movie;
    
    get poster(): String {
        return this.movie.Poster;
    }
    get title(): String {
        return this.movie.Title;
    }
    get year(): Number {
        return this.movie.Year;
    }
    get imdbRating(): Number {
        return this.movie.imdbRating;
    }
}
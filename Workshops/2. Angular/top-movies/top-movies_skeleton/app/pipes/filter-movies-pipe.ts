import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterMovies'
})
export class FilterMovies implements PipeTransform{
    transform(movies:any[],input:string){
        if(input===""){
            return movies;
        }
       return movies.filter(movie=>movie.Title.toLowerCase().includes(input.toLowerCase()));
    }
}
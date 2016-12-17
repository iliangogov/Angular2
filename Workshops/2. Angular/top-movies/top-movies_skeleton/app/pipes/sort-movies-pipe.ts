import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortMoviesBy'
})
export class SortMoviesBy implements PipeTransform {
    transform(movies: any[], sortBy: string, orderBy: string) {
        if (sortBy) {
            if (orderBy === 'Ascending') {
                return movies.sort((a, b) => {
                    return a[sortBy].toString().localeCompare(b[sortBy].toString());
                });
            }else{
                 return movies.sort((a, b) => {
                    return b[sortBy].toString().localeCompare(a[sortBy].toString());
                });
            }
        } else {
            return movies.sort();
        }
    }
}
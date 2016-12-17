import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MovieListComponent} from './movie/movies-list.component';
import {MovieShortComponent} from './movie/movie-short.component';
import {SortMoviesBy} from './pipes/sort-movies-pipe';
import {FilterMovies} from './pipes/filter-movies-pipe';

import {Ng2BootstrapModule} from '../node_modules/ng2-bootstrap/ng2-bootstrap';

@NgModule({
    // put all the needed data here
    imports:[BrowserModule,HttpModule,Ng2BootstrapModule],
    declarations:[AppComponent,MovieListComponent,MovieShortComponent,SortMoviesBy,FilterMovies],
    bootstrap:[AppComponent]
})
export class AppModule { }

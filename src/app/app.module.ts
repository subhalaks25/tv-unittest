import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TVShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { TvShowService } from './tv-show/tv-show.service'; 
import {HttpClientModule} from '@angular/common/http';
//import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import{MatFormFieldModule,MatInputModule,MatButtonModule,MatToolbarModule,MatCardModule, MatIconModule} from '@angular/material';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TvShowSearchComponent } from './tv-show-search/tv-show-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TVShowDetailsComponent,
    TvShowSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,/*
    BrowserAnimationsModule,
    NoopAnimationsModule,*/
    FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatToolbarModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatToolbarModule,
    MatCardModule,
    MatIconModule/*,
    BrowserAnimationsModule*/
  ],
  providers: [TvShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }

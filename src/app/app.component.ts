import { Component } from '@angular/core';
import { ITVShowDetails } from './itvshow-details';
import { TvShowService } from './tv-show/tv-show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-maze-app';
 
  loadedCast: Array<object> = [];
  finalCast: any[] = [];

  constructor(private tvshowservice : TvShowService){

  }

  
  currentshow : ITVShowDetails;

  doSearch(searchValue){
    if(searchValue){

      this.loadedCast.length = 0;
      this.finalCast.length = 0;

      const userInput = searchValue.replace(' ','%20');
    
      this.tvshowservice.getTvShow(userInput).subscribe(data => {
   
        this.tvshowservice.getCast(data.id).subscribe(loadedCast => {
          console.log(loadedCast);
          for (let prop in loadedCast) {
            this.finalCast.push(loadedCast[prop].person.name);
          }
          console.log(this.finalCast);
          data.cast = this.finalCast;
          console.log(data);
          this.currentshow = data;
  
        });
      });

    }

  }
}

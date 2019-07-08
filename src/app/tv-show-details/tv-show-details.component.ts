import { Component, OnInit, Input } from '@angular/core';
import { ITVShowDetails } from '../itvshow-details';
import { TvShowService } from '../tv-show/tv-show.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TVShowDetailsComponent implements OnInit {

  @Input() show: ITVShowDetails;

  constructor() {
    
  }

  ngOnInit() {

    
  } 

}

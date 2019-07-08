import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TvShowService } from '../tv-show/tv-show.service';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-tv-show-search',
  templateUrl: './tv-show-search.component.html',
  styleUrls: ['./tv-show-search.component.css']
})
export class TvShowSearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();
  
  search = new FormControl('',[Validators.minLength(3)])

  constructor(private tvshowservice : TvShowService) { }

  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue : string) => {
      if(!this.search.invalid){
        this.searchEvent.emit(searchValue);
    }
    
    
    })
  }
  getErrorMessage(){
    return this.search.hasError('minlength') ? 'Type three or more characters in the search bar' : '';
  }

}

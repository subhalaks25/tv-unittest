import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TvShowService } from './tv-show.service';

describe('TvShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: TvShowService = TestBed.get(TvShowService);
    expect(service).toBeTruthy();
  });
});

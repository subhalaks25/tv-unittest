import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import{ MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule} from '@angular/material';
import { AppComponent } from './app.component';
import { TvShowSearchComponent } from './tv-show-search/tv-show-search.component';
import { TVShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
        //BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        TvShowSearchComponent,
        TVShowDetailsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tv-maze-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tv-maze-app');
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Find a TV Show');
  });
});

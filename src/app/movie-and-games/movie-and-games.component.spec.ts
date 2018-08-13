import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAndGamesComponent } from './movie-and-games.component';

describe('MovieAndGamesComponent', () => {
  let component: MovieAndGamesComponent;
  let fixture: ComponentFixture<MovieAndGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieAndGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAndGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

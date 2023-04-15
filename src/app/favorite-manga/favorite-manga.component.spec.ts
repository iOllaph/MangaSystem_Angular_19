import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMangaComponent } from './favorite-manga.component';

describe('FavoriteMangaComponent', () => {
  let component: FavoriteMangaComponent;
  let fixture: ComponentFixture<FavoriteMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteMangaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

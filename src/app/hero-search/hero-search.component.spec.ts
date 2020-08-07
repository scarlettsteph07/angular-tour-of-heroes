import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { HeroService } from '../hero.service';
import { HeroSearchComponent } from './hero-search.component';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    const heroServiceSpy = jasmine.createSpyObj('heroServiceSpy', [
      'searchHeroes',
    ]);
    TestBed.configureTestingModule({
      imports: [MatAutocompleteModule],
      declarations: [HeroSearchComponent],
      providers: [{ provide: HeroService, useValue: heroServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

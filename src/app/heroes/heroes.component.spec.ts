import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { heroes } from '../../test/heroes-response.data';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroService: any;
  const initialState = {
    heroes: {
      hero: {} as Hero,
      heroes: [],
      error: null,
      loading: false,
    },
  };
  const matDialogMock = {
    open(): any {
      return {
        afterClosed: () => of(true),
      };
    },
  };

  beforeEach(async(() => {
    const heroServiceSpy = jasmine.createSpyObj('heroServiceSpy', [
      'getHeroes',
      'addHero',
    ]);
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [
        { provide: HeroService, useValue: heroServiceSpy },
        { provide: MatDialog, useValue: matDialogMock },
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    heroService = fixture.debugElement.injector.get(HeroService);
    heroService.getHeroes.and.returnValue(of(heroes));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

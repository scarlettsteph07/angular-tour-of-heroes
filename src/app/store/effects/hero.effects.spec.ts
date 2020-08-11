import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { HeroService } from '../../hero.service';
import { HeroEffects } from './hero.effects';

describe('HeroEffects', () => {
  let actions$: Observable<any>;
  let effects: HeroEffects;

  beforeEach(() => {
    const heroServiceSpy = jasmine.createSpyObj('heroServiceSpy', [
      'getHeroes',
    ]);
    TestBed.configureTestingModule({
      providers: [
        HeroEffects,
        provideMockActions(() => actions$),
        { provide: HeroService, useValue: heroServiceSpy },
      ],
    });

    effects = TestBed.inject(HeroEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

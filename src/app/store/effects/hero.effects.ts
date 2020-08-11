import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { HeroService } from 'src/app/hero.service';
import {
  loadHeroes,
  loadHeroesFailure,
  loadHeroesSuccess,
} from '../actions/hero.actions';

@Injectable()
export class HeroEffects {
  constructor(
    private actions$: Actions,
    private heroService: HeroService
  ) {}

  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHeroes),
      mergeMap(() =>
        this.heroService.getHeroes().pipe(
          map((heroes) => loadHeroesSuccess({ heroes })),
          catchError((error) => of(loadHeroesFailure({ error })))
        )
      )
    )
  );
}

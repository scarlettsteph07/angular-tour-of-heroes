import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, pluck } from 'rxjs/operators';

import { HeroService } from 'src/app/hero.service';
import {
  addHero,
  addHeroFailure,
  addHeroSuccess,
  deleteHero,
  deleteHeroFailure,
  deleteHeroSuccess,
  editHero,
  editHeroFailure,
  editHeroSuccess,
  getHeroById,
  getHeroByIdFailure,
  getHeroByIdSuccess,
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

  addHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addHero),
      pluck('hero'),
      mergeMap((hero) =>
        this.heroService.addHero(hero).pipe(
          map((heroRes) => addHeroSuccess({ hero: heroRes })),
          catchError((error) => of(addHeroFailure({ error })))
        )
      )
    )
  );

  deleteHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteHero),
      pluck('hero'),
      mergeMap((hero) =>
        this.heroService.deleteHero(hero).pipe(
          map(() => deleteHeroSuccess({ hero })),
          catchError((error) => of(deleteHeroFailure({ error })))
        )
      )
    )
  );

  getHeroById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHeroById),
      pluck('id'),
      mergeMap((id) =>
        this.heroService.getHero(id).pipe(
          map((hero) => getHeroByIdSuccess({ hero })),
          catchError((error) => of(getHeroByIdFailure({ error })))
        )
      )
    )
  );

  editHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editHero),
      pluck('hero'),
      mergeMap((hero) =>
        this.heroService.updateHero(hero).pipe(
          map(() => editHeroSuccess({ hero })),
          catchError((error) => of(editHeroFailure({ error })))
        )
      )
    )
  );
}

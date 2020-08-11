import { createAction, props } from '@ngrx/store';

import { Hero } from 'src/app/hero';

export const loadHeroes = createAction('[Hero] Load Heroes');

export const loadHeroesSuccess = createAction(
  '[Hero] Load Heroes Success',
  props<{ heroes: Hero[] }>()
);

export const loadHeroesFailure = createAction(
  '[Hero] Load Heroes Failure',
  props<{ error: any }>()
);

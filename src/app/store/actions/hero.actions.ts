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

export const addHero = createAction(
  '[Hero] Add Hero',
  props<{ hero: Hero }>()
);

export const addHeroSuccess = createAction(
  '[Hero] Add Hero Success',
  props<{ hero: Hero }>()
);

export const addHeroFailure = createAction(
  '[Hero] Add Hero Failure',
  props<{ error: any }>()
);

export const deleteHero = createAction(
  '[Hero] Delete Hero',
  props<{ hero: Hero }>()
);

export const deleteHeroSuccess = createAction(
  '[Hero] Delete Hero Success',
  props<{ hero: Hero }>()
);

export const deleteHeroFailure = createAction(
  '[Hero] Delete Hero Failure',
  props<{ error: any }>()
);

export const editHero = createAction(
  '[Hero] Edit Hero',
  props<{ hero: Hero }>()
);

export const editHeroSuccess = createAction(
  '[Hero] Edit Hero Success',
  props<{ hero: Hero }>()
);

export const editHeroFailure = createAction(
  '[Hero] Edit Hero Failure',
  props<{ error: any }>()
);

export const getHeroById = createAction(
  '[Hero] Get Hero By Id',
  props<{ id: number }>()
);

export const getHeroByIdSuccess = createAction(
  '[Hero] Get Hero By Id Success',
  props<{ hero: Hero }>()
);

export const getHeroByIdFailure = createAction(
  '[Hero] Get Hero By Id Failure',
  props<{ error: any }>()
);

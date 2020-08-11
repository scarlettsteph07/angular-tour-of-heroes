import { createReducer, on } from '@ngrx/store';
import {
  addHero,
  addHeroFailure,
  addHeroSuccess,
  loadHeroes,
  loadHeroesFailure,
  loadHeroesSuccess,
} from '../actions/hero.actions';

import { Hero } from 'src/app/hero';

export const heroFeatureKey = 'hero';

export interface HeroState {
  hero: Hero;
  heroes: Hero[];
  error: any;
  loading: boolean;
}

export const initialState: HeroState = {
  hero: {} as Hero,
  heroes: [],
  error: null,
  loading: false,
};

export const heroReducer = createReducer(
  initialState,
  on(loadHeroes, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadHeroesSuccess, (state, { heroes }) => ({
    ...state,
    heroes,
    loading: false,
  })),
  on(loadHeroesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(addHero, (state) => ({
    ...state,
    loading: true,
  })),
  on(addHeroSuccess, (state, { hero }) => ({
    ...state,
    heroes: [...state.heroes, hero],
    loading: false,
  })),
  on(addHeroFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

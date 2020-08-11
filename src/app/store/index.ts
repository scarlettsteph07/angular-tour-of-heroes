import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import { heroReducer, HeroState } from './reducers/hero.reducer';

export interface State {
  heroes: HeroState;
}

export const reducers: ActionReducerMap<State> = {
  heroes: heroReducer,
};

export const metaReducers: MetaReducer<
  State
>[] = !environment.production ? [] : [];

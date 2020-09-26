import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Hero } from '../hero';
import { State } from '../store';
import { loadHeroes } from '../store/actions/hero.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.store.dispatch(loadHeroes());
    this.store
      .select(({ heroes }) => heroes)
      .subscribe(({ heroes }) => (this.heroes = heroes.slice(1, 5)));
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchQueries = new Subject<string>();
  isLoading = false;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes$ = this.searchQueries.pipe(
      tap(() => (this.isLoading = true)),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query: string) =>
        this.heroService.searchHeroes(query)
      ),
      tap(() => (this.isLoading = false))
    );
  }

  search(query: string): void {
    this.searchQueries.next(query);
  }
}

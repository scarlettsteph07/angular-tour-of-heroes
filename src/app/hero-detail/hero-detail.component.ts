import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { pluck } from 'rxjs/operators';

import { Hero } from '../hero';
import { State } from '../store';
import { editHero, getHeroById } from '../store/actions/hero.actions';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    this.route.params.pipe(pluck('id')).subscribe((id) => {
      id = +id;
      this.store.dispatch(getHeroById({ id }));
      this.store
        .select(({ heroes }) => heroes)
        .subscribe(({ hero }) => (this.hero = hero));
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(name: string): void {
    this.hero = { ...this.hero, name };
    this.store.dispatch(editHero({ hero: this.hero }));
  }
}

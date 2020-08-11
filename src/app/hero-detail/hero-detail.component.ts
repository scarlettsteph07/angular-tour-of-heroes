import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    this.route.params.pipe(pluck('id')).subscribe((id) => {
      id = +id;
      this.heroService
        .getHero(id)
        .subscribe((hero) => (this.hero = hero));
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(name: string): void {
    this.hero = { ...this.hero, name };
    this.heroService
      .updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}

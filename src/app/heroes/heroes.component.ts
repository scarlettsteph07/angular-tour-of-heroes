import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Hero } from '../hero';
import { HeroDialogComponent } from '../hero-dialog/hero-dialog.component';
import { HeroService } from '../hero.service';
import { State } from '../store';
import { loadHeroes } from '../store/actions/hero.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private store: Store<State>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.store.dispatch(loadHeroes());
    this.store
      .select(({ heroes }) => heroes)
      .subscribe(({ heroes }) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService
      .addHero({ name } as Hero)
      .subscribe((hero) => this.heroes.push(hero));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(({ id }) => id !== hero.id);
    this.heroService.deleteHero(hero).subscribe();
  }

  openConfirmDialog(hero: Hero): void {
    const dialogRef = this.dialog.open(HeroDialogComponent);
    dialogRef.afterClosed().subscribe((shouldDelete) => {
      if (shouldDelete) {
        this.delete(hero);
      }
    });
  }
}

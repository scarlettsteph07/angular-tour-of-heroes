import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

import { heroes } from '../../test/heroes-response.data';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroService: any;
  const matDialogMock = {
    open(): any {
      return {
        afterClosed: () => of(true),
      };
    },
  };

  beforeEach(async(() => {
    const heroServiceSpy = jasmine.createSpyObj('heroServiceSpy', [
      'getHeroes',
      'addHero',
    ]);
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [
        { provide: HeroService, useValue: heroServiceSpy },
        { provide: MatDialog, useValue: matDialogMock },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    heroService = fixture.debugElement.injector.get(HeroService);
    heroService.getHeroes.and.returnValue(of(heroes));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

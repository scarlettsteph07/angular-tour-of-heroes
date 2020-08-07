import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { heroes } from 'src/test/heroes-response.data';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let heroService: any;

  beforeEach(async(() => {
    const activatedRouteMock = {
      params: of({ id: '1234' }),
      snapshot: {
        paramMap: {
          get: () => '1234',
        },
      },
    };
    const heroServiceSpy = jasmine.createSpyObj('heroServiceSpy', [
      'getHero',
      'updateHero',
    ]);
    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: HeroService, useValue: heroServiceSpy },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    heroService = fixture.debugElement.injector.get(HeroService);
    heroService.getHero.and.returnValue(of(heroes));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

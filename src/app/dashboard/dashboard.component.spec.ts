import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { of } from 'rxjs';

import { heroes } from '../../test/heroes-response.data';
import { HeroService } from '../hero.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let heroService: any;

  beforeEach(async(() => {
    const heroServiceSpy = jasmine.createSpyObj('heroServiceSpy', [
      'getHeroes',
    ]);
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        {
          provide: HeroService,
          useValue: heroServiceSpy,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    heroService = fixture.debugElement.injector.get(HeroService);
    heroService.getHeroes.and.returnValue(of(heroes));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

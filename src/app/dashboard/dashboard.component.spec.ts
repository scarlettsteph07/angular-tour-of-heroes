import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { Hero } from '../hero';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const initialState = {
    heroes: {
      hero: {} as Hero,
      heroes: [],
      error: null,
      loading: false,
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

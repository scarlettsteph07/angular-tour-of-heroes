import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { HeroDialogComponent } from './hero-dialog.component';

describe('HeroDialogComponent', () => {
  let component: HeroDialogComponent;
  let fixture: ComponentFixture<HeroDialogComponent>;

  beforeEach(async(() => {
    const dialogDataStub = null;
    TestBed.configureTestingModule({
      declarations: [HeroDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: dialogDataStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

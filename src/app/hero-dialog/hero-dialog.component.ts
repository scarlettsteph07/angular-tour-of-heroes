import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hero-dialog',
  templateUrl: './hero-dialog.component.html',
  styleUrls: ['./hero-dialog.component.scss'],
})
export class HeroDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: boolean) {}

  ngOnInit(): void {}
}

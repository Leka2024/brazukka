// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { ColorPaletteComponent } from './color-palette.component';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

describe('ColorPaletteComponent', () => {
  let component: ColorPaletteComponent;
  let fixture: ComponentFixture<ColorPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorPaletteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

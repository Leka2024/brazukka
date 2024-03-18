// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { ColorItemComponent } from './color-item.component';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

describe('ColorItemComponent', () => {
  let component: ColorItemComponent;
  let fixture: ComponentFixture<ColorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

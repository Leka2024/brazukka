// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
/* eslint-disable @typescript-eslint/consistent-type-imports */

import { ComponentFixture } from '@angular/core/testing';
import { MaxxyTilesLayoutComponent } from './maxxy-tiles-layout.component';
import { TestBed } from '@angular/core/testing';

describe('MaxxyTilesLayoutComponent', () => {
  let component: MaxxyTilesLayoutComponent;
  let fixture: ComponentFixture<MaxxyTilesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaxxyTilesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxxyTilesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

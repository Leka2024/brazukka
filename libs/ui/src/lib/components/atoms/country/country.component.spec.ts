// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import type { ComponentFixture } from '@angular/core/testing';
import { CountryComponent } from './country.component';
import { TestBed } from '@angular/core/testing';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

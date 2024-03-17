// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import 'jest';

import { ButtonComponent } from './button.component';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

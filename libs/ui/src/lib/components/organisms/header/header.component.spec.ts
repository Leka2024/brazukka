// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import type { ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { TestBed } from '@angular/core/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

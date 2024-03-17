import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellEducationLayoutComponent } from './shell-education-layout.component';

describe('ShellEducationLayoutComponent', () => {
  let component: ShellEducationLayoutComponent;
  let fixture: ComponentFixture<ShellEducationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellEducationLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellEducationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

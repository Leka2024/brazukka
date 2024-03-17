import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellInspirationLayoutComponent } from './shell-inspiration-layout.component';

describe('ShellInspirationLayoutComponent', () => {
  let component: ShellInspirationLayoutComponent;
  let fixture: ComponentFixture<ShellInspirationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellInspirationLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellInspirationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

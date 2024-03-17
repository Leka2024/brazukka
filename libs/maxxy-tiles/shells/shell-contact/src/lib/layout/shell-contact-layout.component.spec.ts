import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellContactLayoutComponent } from './shell-contact-layout.component';

describe('ShellContactLayoutComponent', () => {
  let component: ShellContactLayoutComponent;
  let fixture: ComponentFixture<ShellContactLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellContactLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellContactLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

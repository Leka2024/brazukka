import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellProductsLayoutComponent } from './shell-products-layout.component';

describe('ShellProductsLayoutComponent', () => {
  let component: ShellProductsLayoutComponent;
  let fixture: ComponentFixture<ShellProductsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellProductsLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellProductsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

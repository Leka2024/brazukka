import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'brazukka-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {}

// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@brazukka/components';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    ComponentsModule,
    RouterModule.forChild([
        {
            path: '',
            pathMatch: 'full',
            component: ProductsComponent,
        },
    ]),
  ],
  declarations: [ProductsComponent],
})
export class FeatureProductsModule {}

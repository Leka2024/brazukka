// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { AssetsModule } from '@brazukka/assets';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@brazukka/components';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellProductsLayoutComponent } from './layout/shell-products-layout.component';

@NgModule({
  imports: [
    AssetsModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellProductsLayoutComponent,
        loadChildren: () =>
          import('@brazukka/maxxy-tiles/feature-products').then(
            (module) => module.FeatureProductsModule,
          ),
      },
    ]),
  ],
  declarations: [ShellProductsLayoutComponent],
})
export class ShellProductsModule {}

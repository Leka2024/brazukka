// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { AssetsModule } from '@brazukka/assets';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@brazukka/components';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellInspirationLayoutComponent } from './layout/shell-inspiration-layout.component';

@NgModule({
  imports: [
    AssetsModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellInspirationLayoutComponent,
        loadChildren: () =>
          import('@brazukka/maxxy-tiles/feature-inspiration').then(
            (module) => module.FeatureInspirationModule,
          ),
      },
    ]),
  ],
  declarations: [ShellInspirationLayoutComponent],
})
export class ShellInspirationModule {}

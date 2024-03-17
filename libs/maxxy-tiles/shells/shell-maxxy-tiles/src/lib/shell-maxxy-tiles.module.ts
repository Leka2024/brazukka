// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Maxxy-tiles Shell
 */
@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild([
          {
              path: '',
              pathMatch: 'full',
              redirectTo: 'products',
          },
          {
            path: 'products',
            loadChildren: () =>
              import('@brazukka/maxxy-tiles/shell-products').then(module => module.ShellProductsModule),
          },
          {
            path: 'inspiration',
            loadChildren: () =>
              import('@brazukka/maxxy-tiles/shell-inspiration').then(module => module.ShellInspirationModule),
          },
          {
            path: 'education',
            loadChildren: () =>
              import('@brazukka/maxxy-tiles/shell-education').then(module => module.ShellEducationModule),
          },
          {
            path: 'contact',
            loadChildren: () =>
              import('@brazukka/maxxy-tiles/shell-contact').then(module => module.ShellContactModule),
          }
      ]),
  ],

})
export class ShellMaxxyTilesModule {}

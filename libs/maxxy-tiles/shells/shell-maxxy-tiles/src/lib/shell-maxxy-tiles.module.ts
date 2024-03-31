// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@brazukka/components';
import { ShellLayoutComponent } from './layout/shell-layout.component';

/**
 * Maxxy-tiles Shell
 */
@NgModule({
  imports: [
      CommonModule,
      ComponentsModule,
      RouterModule.forChild([
          {
              path: '',
              pathMatch: 'full',
              redirectTo: 'products',
          },
          {
            path: 'products',
            component: ShellLayoutComponent,
            loadChildren: () =>
              import('@brazukka/maxxy-tiles/shell-products').then(module => module.ShellProductsModule),
            data: { animation: 'productsPage' }
          },
          {
            path: 'inspiration',
            component: ShellLayoutComponent,
            loadChildren: () =>
              import('@brazukka/maxxy-tiles/shell-inspiration').then(module => module.ShellInspirationModule),
            data: { animation: 'inspirationPage' }
          },
          {
            path: 'education',
            component: ShellLayoutComponent,
            loadChildren: () =>
              import('@brazukka/maxxy-tiles/shell-education').then(module => module.ShellEducationModule),
            data: { animation: 'educationPage' }
          },
          {
            path: 'contact',
            component: ShellLayoutComponent,
            loadChildren: () =>
              import('@brazukka/maxxy-tiles/shell-contact').then(module => module.ShellContactModule),
            data: { animation: 'contactPage' }
          }
      ]),
  ],
  declarations: [ShellLayoutComponent],
})
export class ShellMaxxyTilesModule {}

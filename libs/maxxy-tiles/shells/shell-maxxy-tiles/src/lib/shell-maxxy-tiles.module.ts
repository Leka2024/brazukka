// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@brazukka/components';
import { ShellLayoutComponent } from './layout/shell-layout.component';

const shellRoutes: Routes = [
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products',
      },
      {
        path: 'products',
        loadChildren: () =>
          import('@brazukka/maxxy-tiles/shell-products').then(module => module.ShellProductsModule),
        data: { animation: 'productsPage' }
      },
      {
        path: 'inspiration',
        loadChildren: () =>
          import('@brazukka/maxxy-tiles/shell-inspiration').then(module => module.ShellInspirationModule),
        data: { animation: 'inspirationPage' }
      },
      {
        path: 'education',
        loadChildren: () =>
          import('@brazukka/maxxy-tiles/shell-education').then(module => module.ShellEducationModule),
        data: { animation: 'educationPage' }
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('@brazukka/maxxy-tiles/shell-contact').then(module => module.ShellContactModule),
        data: { animation: 'contactPage' }
      }
    ]
  }
];


/**
 * Maxxy-tiles Shell
 */
@NgModule({
  imports: [
      CommonModule,
      ComponentsModule,
      RouterModule.forChild(shellRoutes),
  ],
  declarations: [ShellLayoutComponent],
})
export class ShellMaxxyTilesModule {}

// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@brazukka/components';
import { ContactComponent } from 'libs/maxxy-tiles/features/feature-contact/src/lib/contact/contact.component';
import { EducationComponent } from 'libs/maxxy-tiles/features/feature-education/src/lib/education/education.component';
import { InspirationComponent } from 'libs/maxxy-tiles/features/feature-inspiration/src/lib/inspiration/inspiration.component';
import { ProductsComponent } from 'libs/maxxy-tiles/features/feature-products/src/lib/products/products.component';
import { ShellLayoutComponent } from './layout/shell-layout.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'shell', pathMatch: 'full' },
//   {
//     path: 'shell',
//     component: ShellLayoutComponent,
//     children: [
//       { path: '', redirectTo: 'products', pathMatch: 'full' },
//       { path: 'products', component: ProductsComponent, data: { animation: 'productsPage' } },
//       { path: 'inspiration', component: InspirationComponent, data: { animation: 'inspirationPage' } },
//       { path: 'education', component: EducationComponent, data: { animation: 'educationPage' } },
//       { path: 'contact', component: ContactComponent, data: { animation: 'contactPage' } },
//     ]
//   }
// ];

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
      RouterModule.forChild( shellRoutes
      //   [
      //     {
      //         path: '',
      //         pathMatch: 'full',
      //         redirectTo: 'products',
      //     },
      //     {
      //       path: 'products',
      //       component: ShellLayoutComponent,
      //       loadChildren: () =>
      //         import('@brazukka/maxxy-tiles/shell-products').then(module => module.ShellProductsModule),
      //       data: { animation: 'productsPage' }
      //     },
      //     {
      //       path: 'inspiration',
      //       component: ShellLayoutComponent,
      //       loadChildren: () =>
      //         import('@brazukka/maxxy-tiles/shell-inspiration').then(module => module.ShellInspirationModule),
      //       data: { animation: 'inspirationPage' }
      //     },
      //     {
      //       path: 'education',
      //       component: ShellLayoutComponent,
      //       loadChildren: () =>
      //         import('@brazukka/maxxy-tiles/shell-education').then(module => module.ShellEducationModule),
      //       data: { animation: 'educationPage' }
      //     },
      //     {
      //       path: 'contact',
      //       component: ShellLayoutComponent,
      //       loadChildren: () =>
      //         import('@brazukka/maxxy-tiles/shell-contact').then(module => module.ShellContactModule),
      //       data: { animation: 'contactPage' }
      //     }
      // ]
      ),
  ],
  declarations: [ShellLayoutComponent],
})
export class ShellMaxxyTilesModule {}

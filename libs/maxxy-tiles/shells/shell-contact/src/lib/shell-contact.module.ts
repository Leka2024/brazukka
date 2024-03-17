// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { AssetsModule } from '@brazukka/assets';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@brazukka/components';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellContactLayoutComponent } from './layout/shell-contact-layout.component';

@NgModule({
  imports: [
    AssetsModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellContactLayoutComponent,
        loadChildren: () =>
          import('@brazukka/maxxy-tiles/feature-contact').then(
            (module) => module.FeatureContactModule,
          ),
      },
    ]),
  ],
  declarations: [ShellContactLayoutComponent],
})
export class ShellContactModule {}

// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { AssetsModule } from '@brazukka/assets';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@brazukka/components';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellEducationLayoutComponent } from './layout/shell-education-layout.component';

@NgModule({
  imports: [
    AssetsModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellEducationLayoutComponent,
        loadChildren: () =>
          import('@brazukka/maxxy-tiles/feature-education').then(
            (module) => module.FeatureEducationModule,
          ),
      },
    ]),
  ],
  declarations: [ShellEducationLayoutComponent],
})
export class ShellEducationModule {}

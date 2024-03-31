// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { AssetsModule } from '@brazukka/assets';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@brazukka/components';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    AssetsModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('@brazukka/maxxy-tiles/feature-education').then(
            (module) => module.FeatureEducationModule,
          ),
      },
    ]),
  ],
})
export class ShellEducationModule {}

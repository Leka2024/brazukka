// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { CommonModule } from '@angular/common';
import { MaxxyTilesLayoutComponent } from '@brazukka/components';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild([
          {
            path: '',
            component: MaxxyTilesLayoutComponent,
            loadChildren: () =>
              import('@brazukka/maxxy-tiles/feature-education').then(module => module.FeatureEducationModule),
          }
      ]),
  ],
})
export class ShellEducationModule {}

// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@brazukka/components';
import { InspirationComponent } from './inspiration/inspiration.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    ComponentsModule,
    RouterModule.forChild([
        {
            path: '',
            pathMatch: 'full',
            component: InspirationComponent,
        },
    ]),
  ],
  declarations: [InspirationComponent],
})
export class FeatureInspirationModule {}

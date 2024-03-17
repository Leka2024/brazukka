// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { TColors } from '../../types/t-colors';

/**
 * Page Component layout for the application.
 */
@Component({
  selector: 'brazukka-maxxy-tiles-layout',
  templateUrl: './maxxy-tiles-layout.component.html',
  styleUrl: './maxxy-tiles-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaxxyTilesLayoutComponent {

  @Input({required: true}) headerTitle!: string;
  @Input({required: true}) headerColor!: TColors;
  @Input({required: true}) footerColor!: TColors;
}

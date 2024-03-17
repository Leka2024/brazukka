// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { TColors } from '@brazukka/types';

/**
 * Footer Component of the page.
 */
@Component({
  selector: 'brazukka-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Input({required: true}) color!: TColors;
}

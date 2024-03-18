// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Router } from '@angular/router';
import type { TColors } from '@brazukka/types';

/**
 * Header Component of the page.
 */
@Component({
  selector: 'brazukka-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) color!: TColors | 'transparent';

  constructor(private readonly router: Router) {
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}

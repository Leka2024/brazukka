// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { IColorItem } from '../color-item/color-item.component';

@Component({
  selector: 'brazukka-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrl: './color-palette.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPaletteComponent {
  @Input({required: true}) colors: Array<IColorItem> = [];
} 

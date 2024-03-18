// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'brazukka-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrl: './color-palette.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPaletteComponent {}

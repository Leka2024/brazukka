// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import { CommonModule } from '@angular/common';
import { ColorItemComponent } from './color-item/color-item.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { NgModule } from '@angular/core';

/**
 * Color Module
 */
@NgModule({
  declarations: [ColorItemComponent, ColorPaletteComponent],
  imports: [CommonModule],
  exports: [ColorItemComponent, ColorPaletteComponent],
})
export class ColorModule {}

// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import { ColorItemComponent } from './color-item/color-item.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { NgModule } from '@angular/core';

/**
 * Color Module
 */
@NgModule({
  declarations: [ColorItemComponent, ColorPaletteComponent],
  imports: [],
  exports: [ColorItemComponent, ColorPaletteComponent],
})
export class ColorModule {}

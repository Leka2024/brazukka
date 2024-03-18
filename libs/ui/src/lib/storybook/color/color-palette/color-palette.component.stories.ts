// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import type { Meta, StoryObj } from '@storybook/angular';

import { ColorPaletteComponent } from './color-palette.component';

export default {
  title: 'Styleguide/ColorPalette',
  component: ColorPaletteComponent,
} as Meta<ColorPaletteComponent>;

type TColorPaletteTemplate = StoryObj<ColorPaletteComponent>;

export const color: TColorPaletteTemplate = {
  args: {
    headerTitle: 'Maxxy-tiles',
    headerColor: 'primary',
    footerColor: 'primary'
  }
}

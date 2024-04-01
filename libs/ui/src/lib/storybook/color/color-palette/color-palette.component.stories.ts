// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ColorPaletteComponent } from './color-palette.component';
import { ColorModule } from '../color.module';

export default {
  title: 'Styleguide/ColorPalette',
  component: ColorPaletteComponent,
  decorators: [
    moduleMetadata({
      imports: [ColorModule]
    })
  ]
} as Meta<ColorPaletteComponent>;

type TColorPaletteTemplate = StoryObj<ColorPaletteComponent>;

export const color: TColorPaletteTemplate = {
  args: {
    colors: [
      {
        title: 'Primary',
        subtitle: 'green',
        colors: [ {
          color: '#7ba9a9',
          function: 'base',
          scssVariable: '$color-primary',
          cssVariable: '--color-primary'
        }]
      }
    ]
  }
}

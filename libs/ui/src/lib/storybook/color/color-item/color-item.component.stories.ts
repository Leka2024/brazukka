// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import type { Meta, StoryObj } from '@storybook/angular';

import { ColorItemComponent } from './color-item.component';

export default {
  title: 'Styleguide/ColorItem',
  component: ColorItemComponent,
} as Meta<ColorItemComponent>;

type TColorItemTemplate = StoryObj<ColorItemComponent>;

export const color: TColorItemTemplate = {
  args: {
    title: 'Primary',
    subtitle: 'green',
    colors: [ {
      color: '#7ba9a9',
      function: 'base',
      scssVariable: '$color-primary',
      cssVariable: '--color-primary'
    }]
  }
}

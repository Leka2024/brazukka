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
        title: 'Base Colors',
        subtitle: 'base',
        colors: [ 
        {
          color: 'black',
          function: 'black',
          scssVariable: '$black',
          cssVariable: '--color-black'
        },
        {
          color: '#666666',
          function: 'gray',
          scssVariable: '$gray',
          cssVariable: '--color-gray'
        },
        {
          color: 'white',
          function: 'white',
          scssVariable: '$white',
          cssVariable: '--color-white'
        },
        {
          color: '#ebf2f0',
          function: 'broken-white',
          scssVariable: '$broken-white',
          cssVariable: '--color-broken-white'
        }]
      },
      {
        title: 'Pink',
        subtitle: 'pink colors',
        colors: [ 
        {
          color: '#ff12d9',
          function: 'pink',
          scssVariable: '$pink',
          cssVariable: '--color-pink'
        },
        {
          color: '#ff87ff',
          function: 'light-pink',
          scssVariable: '$light-pink',
          cssVariable: '--color-light-pink'
        }]
      }, 
      {
        title: 'Blue',
        subtitle: 'blue colors',
        colors: [ 
        {
          color: '#0559f5',
          function: 'blue',
          scssVariable: '$blue',
          cssVariable: '--color-blue'
        },
        {
          color: '#3dbfff',
          function: 'light-blue',
          scssVariable: '$light-blue',
          cssVariable: '--color-light-blue'
        }]
      },
      {
        title: 'Green',
        subtitle: 'green colors',
        colors: [
        {
          color: '#09432c',
          function: 'dark-green',
          scssVariable: '$dark-green',
          cssVariable: '--color-dark-green'
        },
        {
          color: '#6bffba',
          function: 'light-green',
          scssVariable: '$light-green',
          cssVariable: '--color-light-green'
        }]
      },
      {
        title: 'Orange',
        subtitle: 'orange colors',
        colors: [
        {
          color: '#ff6600',
          function: 'orange',
          scssVariable: '$orange',
          cssVariable: '--color-orange'
        },
        {
          color: '#ffad42',
          function: 'light-orange',
          scssVariable: '$light-orange',
          cssVariable: '--color-light-orange'
        }]
      },
      {
        title: 'Misc',
        subtitle: 'misc colors',
        colors: [
        {
          color: '#38cbbe',
          function: 'turqoise',
          scssVariable: '$turqoise',
          cssVariable: '--color-turqoise'
        },
        {
          color: '#fce04a',
          function: 'yellow',
          scssVariable: '$yellow',
          cssVariable: '--color-yellow'
        },
        {
          color: '#ff0000',
          function: 'red',
          scssVariable: '$red',
          cssVariable: '--color-red'
        }]
      }
    ]
  }
}
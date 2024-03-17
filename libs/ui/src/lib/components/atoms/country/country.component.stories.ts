// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import type { Meta, StoryObj } from '@storybook/angular';

import { AssetsModule } from '../../../assets/assets.module';
import { CountryComponent } from './country.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Atoms/Country',
  component: CountryComponent,
  decorators: [
    moduleMetadata({
      imports: [AssetsModule]
    })
  ]
} as Meta<CountryComponent>;

type TIconTemplate = StoryObj<CountryComponent>;

export const netherlands: TIconTemplate = {
  args: {
    label: 'Primary Button',
    type: 'nl'
  }
}

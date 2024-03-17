// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import type { Meta, StoryObj } from '@storybook/angular';

import { AssetsModule } from './../../../assets/assets.module';
import { AtomsModule } from './../../atoms/atoms.module';
import { HeaderComponent } from './header.component';
import { MoleculesModule } from './../../molecules/molecules.module';
import { OrganismsModule } from '../organisms.module';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Organisms/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [AssetsModule, AtomsModule, MoleculesModule, OrganismsModule]
    })
  ]
} as Meta<HeaderComponent>;

type TIconTemplate = StoryObj<HeaderComponent>;

export const header: TIconTemplate = {
  args: {
    title: 'Maxxy-tiles',
    color: 'primary'
  }
}

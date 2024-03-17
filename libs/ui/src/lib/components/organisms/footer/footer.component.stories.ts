// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import type { Meta, StoryObj } from '@storybook/angular';

import { AssetsModule } from './../../../assets/assets.module';
import { AtomsModule } from './../../atoms/atoms.module';
import { FooterComponent } from './footer.component';
import { MoleculesModule } from './../../molecules/molecules.module';
import { OrganismsModule } from '../organisms.module';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Organisms/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [AssetsModule, AtomsModule, MoleculesModule, OrganismsModule]
    })
  ]
} as Meta<FooterComponent>;

type TIconTemplate = StoryObj<FooterComponent>;

export const footer: TIconTemplate = {
  args: {
    color: 'primary'
  }
}

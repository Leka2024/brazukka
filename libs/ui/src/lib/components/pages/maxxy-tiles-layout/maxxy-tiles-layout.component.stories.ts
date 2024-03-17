// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import type { Meta, StoryObj } from '@storybook/angular';

import { AssetsModule } from '../../../assets/assets.module';
import { AtomsModule } from '../../atoms/atoms.module';
import { MaxxyTilesLayoutComponent } from './maxxy-tiles-layout.component';
import { MoleculesModule } from '../../molecules/molecules.module';
import { OrganismsModule } from '../../organisms/organisms.module';
import { TemplatesModule } from '../../templates/templates.module';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Pages/MaxxyTilesLayout',
  component: MaxxyTilesLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [AssetsModule, AtomsModule, MoleculesModule, OrganismsModule, TemplatesModule]
    })
  ]
} as Meta<MaxxyTilesLayoutComponent>;

type TIconTemplate = StoryObj<MaxxyTilesLayoutComponent>;

export const maxxyTilesLayout: TIconTemplate = {
  args: {
    headerTitle: 'Maxxy-tiles',
    headerColor: 'primary',
    footerColor: 'primary'
  }
}

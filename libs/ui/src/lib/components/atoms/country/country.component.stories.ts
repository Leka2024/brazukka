import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CountryComponent } from './country.component';
import { AssetsModule } from '../../../assets/assets.module';

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

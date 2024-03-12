import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { FooterComponent } from './footer.component';
import { OrganismsModule } from '../organisms.module';

export default {
  title: 'Organisms/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [OrganismsModule]
    })
  ]
} as Meta<FooterComponent>;

type TIconTemplate = StoryObj<FooterComponent>;

export const footer: TIconTemplate = {
  args: {
  }
}

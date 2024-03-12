import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { HeaderComponent } from './header.component';
import { OrganismsModule } from '../organisms.module';

export default {
  title: 'Organisms/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [OrganismsModule]
    })
  ]
} as Meta<HeaderComponent>;

type TIconTemplate = StoryObj<HeaderComponent>;

export const header: TIconTemplate = {
  args: {
  }
}

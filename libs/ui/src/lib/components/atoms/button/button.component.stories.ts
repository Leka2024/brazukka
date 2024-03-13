import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { ButtonComponent } from './button.component';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
} as Meta<ButtonComponent>;

type TButtonTemplate = StoryObj<ButtonComponent>;

export const primary: TButtonTemplate = {
  args: {
    label: 'Primary Button',
    type: 'nl'
  }
}

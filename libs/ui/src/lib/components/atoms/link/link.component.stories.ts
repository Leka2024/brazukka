import { AssetsModule } from './../../../assets/assets.module';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { LinkComponent } from './link.component';
import { AtomsModule } from '../atoms.module';

export default {
  title: 'Atoms/Link',
  component: LinkComponent,
  decorators: [
    moduleMetadata({
      imports: [AssetsModule, AtomsModule]
    })
  ]
} as Meta<LinkComponent>;

type TLinkTemplate = StoryObj<LinkComponent>;

export const primary: TLinkTemplate = {
  args: {
    label: 'Navigate Home',
    value: 'home'
  }
}

export const withIconLeft: TLinkTemplate = {
  args: {
    label: 'Navigate Home',
    value: 'home',
    icon: 'plus',
    iconPosition: 'left'
  }
}

export const withIconRight: TLinkTemplate = {
  args: {
    ...withIconLeft.args,
    iconPosition: 'right'
  }
}

export const withIconTop: TLinkTemplate = {
  args: {
    ...withIconLeft.args,
    iconPosition: 'top'
  }
}

export const withIconBottom: TLinkTemplate = {
  args: {
    ...withIconLeft.args,
    iconPosition: 'bottom'
  }
}

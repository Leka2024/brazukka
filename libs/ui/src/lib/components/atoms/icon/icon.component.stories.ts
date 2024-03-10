import { Meta, StoryObj } from '@storybook/angular';

import { IconComponent } from './icon.component';

export default {
  title: 'Atoms/Icon',
  component: IconComponent
} as Meta<IconComponent>;

type TIconTemplate = StoryObj<IconComponent>;

export const primary: TIconTemplate = {
  args: {
    label: 'Primary Button',
    color: 'primary'
  }
}

export const secondary: TIconTemplate = {
  args: {
    label: 'Secondary Button',
    color: 'secondary'
  }
}

// import {Args, ArgTypes, moduleMetadata, Story} from '@storybook/angular';
// import {IconComponent} from './icon.component';
// import {UiComponentsModule} from '../ui.components.module';

// export default {
//   title: 'Montis/Components/Icon',
//   component: IconComponent,
//   decorators: [
//     moduleMetadata({
//       imports: [UiComponentsModule],
//     }),
//   ],
// };

// const htmlTemplate = `<app-icon [set]="set" [type]="type" [label]="label" [size]="size" [color]="color"></app-icon>`;
// // const Template: Story<IconComponent> = args => ({
// //   component: IconComponent,
// //   props: {
// //     ...args,
// //     type: 'address-book',
// //     color: args.color
// //   }
// // });

// const story: Story = args => ({
//   template: htmlTemplate,
//   props: args,
// });
// const argTypes: Partial<ArgTypes<Args>> = {
//   set: {
//     description: 'Which iconset are we using, country contains only countryflags. Iconset contains the other icons',
//     defaultValue: 'icon',
//     type: {name: 'string', required: true},
//     control: {
//       type: 'text',
//       defaultValue: 'icon'
//     }
//   },
//   type: {
//     description: 'The name of the icon',
//     defaultValue: 'user',
//     type: {name: 'string', required: true},
//     control: {
//       type: 'text',
//       defaultValue: 'user'
//     }
//   },
//   label: {
//     description: 'The label of the icon',
//     defaultValue: 'Icon',
//     type: {name: 'string', required: true},
//     control: {
//       type: 'text',
//       defaultValue: 'Icon'
//     }
//   },
//   color: {
//     description: 'Determine what color styling is of the icon',
//     defaultValue: 'deep-blue',
//     type: {name: 'string', required: true},
//     control: {
//       type: 'select',
//       options: ['deep-blue'
//       , 'deep-blue-inverted'
//       , 'light-blue'
//       , 'light-blue-inverted'
//       , 'fresh-blue'
//       , 'fresh-blue-inverted'
//       , 'warm-coral'
//       , 'warm-coral-inverted'
//       , 'deep-yellow'
//       , 'light-yellow'
//       , 'deep-purple'
//       , 'light-purple'
//       , 'deep-red'
//       , 'light-red'
//       , 'grey'
//       , 'ghost'
//       , 'white-ghost']
//     },
//   },
//   css: {
//     description: 'custom styling of the icon component'
//   },
//   size: {
//     description: 'Determine what color styling is of the icon',
//     defaultValue: 'regular',
//     type: {name: 'string', required: true},
//     control: {
//       type: 'select',
//       options: ['small', 'extra-small', 'regular', 'medium', 'large', 'huge']
//     },
//   },
// };

// export const extraSmall = story.bind({});
// extraSmall.argTypes = {...argTypes};
// extraSmall.args = {size: 'extra-small', icon: 'user'};

// export const small = story.bind({});
// small.argTypes = {...argTypes};
// small.args = {
//   size: 'small',
// };

// export const regular = story.bind({});
// regular.argTypes = {...argTypes};
// regular.args = {
//   size: 'regular',
// };

// export const medium = story.bind({});
// medium.argTypes = {...argTypes};
// medium.args = {
//   type: 'user',
//   size: 'medium',
// };

// export const large = story.bind({});
// large.argTypes = {...argTypes};
// large.args = {
//   size: 'large',
// };

// export const huge = story.bind({});
// huge.argTypes = {...argTypes};
// huge.args = {
//   size: 'huge',
// };

// export const ghost = story.bind({});
// ghost.argTypes = {...argTypes};
// ghost.args = {
//   color: 'ghost'
// };

// export const whiteGhost = story.bind({});
// whiteGhost.argTypes = {...argTypes};
// whiteGhost.args = {
//   color: 'white-ghost'
// };

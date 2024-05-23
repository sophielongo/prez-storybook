import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { TotoComponent } from './toto.component';

const meta: Meta<TotoComponent> = {
  title: 'TOTO ',
  component: TotoComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
    <app-toto ${argsToTemplate(args)}>
    </app-toto>
    `,
  }),
};

export default meta;
type Story = StoryObj<TotoComponent>;

export const Default: Story = {
  args: {
    text: 'Mon test sur storybook',
  },
};

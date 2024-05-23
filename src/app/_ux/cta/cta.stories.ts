import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { CTAComponent } from './cta.component';

const meta: Meta<CTAComponent> = {
  title: 'CTA ',
  component: CTAComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
    <fc-cta ${argsToTemplate(args)}>
      Clique-moi !!!
    </fc-cta>
    `,
  }),
};

export default meta;
type Story = StoryObj<CTAComponent>;

export const Default: Story = {
  args: {},
};

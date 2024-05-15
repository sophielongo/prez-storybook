import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Card ',
  component: CardComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
    <fc-card ${argsToTemplate(args)}>
    </fc-card>
    `,
  }),
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    cat: {
      name: 'Esmeralda',
      img: 'https://cdn.pixabay.com/photo/2022/04/03/17/48/animal-7109566_960_720.jpg',
      nickname: 'La rebelle',
    },
  },
};

export const Pierrot: Story = {
  args: {
    cat: {
      name: 'Pierrot',
      img: 'https://cdn.pixabay.com/photo/2017/08/21/19/52/cat-2666597_960_720.jpg',
      nickname: 'le gros chat roux',
    },
  },
};

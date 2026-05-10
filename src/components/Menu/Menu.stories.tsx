import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'ZenUI/Menu',
  component: Menu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    items: ['Home', 'Play', 'About', 'Contact'],
    onSelect: (item) => alert(`Selected: ${item}`),
  },
};  
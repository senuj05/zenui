import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'ZenUI/Banner',
  component: Banner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'This is an info banner.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'This is a success banner.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'This is a warning banner.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'This is an error banner.',
  },
};
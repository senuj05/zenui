import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'ZenUI/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'DEFAULT',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'SECONDARY',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'SUCCESS',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'WARNING',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'OUTLINE',
  },
};

export const Error: Story ={
    args:{
        variant:'error',    
        children: 'ERROR',
    },
}   
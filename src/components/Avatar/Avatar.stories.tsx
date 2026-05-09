import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'ZenUI/Avatar',
    component: Avatar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Small: Story = {
    args: {
        size: 'small',
        alt: 'Small Avatar',
    },    
};

export const Medium: Story = {
    args: {
        size: 'medium',
        alt: 'Medium Avatar',
    
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        alt: 'Large Avatar',
       
    },
};      
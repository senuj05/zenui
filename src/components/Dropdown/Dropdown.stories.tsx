import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta : Meta<typeof Dropdown> = {
    title: 'ZenUI/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj <typeof Dropdown>

export const Default: Story ={
    args: {
        items:[
            {
                label: 'Item 1',
                content: 'Content for Item 1',},
            {
                label: 'Item 2',
                content: 'Content for Item 2',
            }   
        ]
    },
}


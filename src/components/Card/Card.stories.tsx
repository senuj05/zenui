import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta : Meta<typeof Card> ={
    title: 'Zenui/Card',
    component : Card,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card >

export const Default: Story = {
    args: {
        subtitle: 'CARD SUBTITLE',
        title: 'Card Title',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',   
    }
}

export const MediaCard: Story = {
    args: {
        variant: 'media-card',
        subtitle: 'CARD SUBTITLE',
        title: 'Card Title',
        image: 'https://images.unsplash.com/photo-1542254504-18e290cb6d0a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&w=400',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',   
    }
}

export const CardButtons: Story = {
    args: {
        variant: 'card-buttons',
        subtitle: 'CARD SUBTITLE',
        title: 'Card Title',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',   
        button :'Submit',
    }
}

export const CardList: Story = {
    args: {
        variant: 'card-list',
        subtitle: 'CARD SUBTITLE',
        title: 'Card Title',
        items: [
            { image: 'https://picsum.photos/50/50?random=1', label: 'Item' },
            { image: 'https://picsum.photos/50/50?random=2', label: 'Item' },
            { image: 'https://picsum.photos/50/50?random=3', label: 'Item' },
            { image: 'https://picsum.photos/50/50?random=4', label: 'Item' },
        ],
    }
}
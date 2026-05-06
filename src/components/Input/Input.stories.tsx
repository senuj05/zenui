import type {Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'ZenUI/Input',
    component : Input,
    tags : ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
    args: {
        variant: 'default',
        placeholder: 'Enter text',
    },
}

export const Placeholder: Story = {
    args: {
        variant: 'placeholder',
        placeholder: 'Type something...',
    },
}

export const WithValue: Story = {
    args: {
        variant: 'with-value',
        value: 'No:16, Galle Road, Colombo 05',
    },
}

export const ReadOnly: Story = {
    args: {
        variant: 'readonly',
        value: 'Read-only input',
        readOnly: true,
    },
}

export const Disabled: Story = {
    args: {
        variant: 'disabled',
        placeholder: 'Disabled input',
        disabled: true,
    },
}   
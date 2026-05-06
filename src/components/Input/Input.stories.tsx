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
    label: 'Email',
  },
}

export const WithPlaceholder: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email...',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Email',
    value: 'hello@zenui.com',
    onChange: () => {},
  },
}

export const Readonly: Story = {
  args: {
    label: 'Email',
    value: 'hello@zenui.com',
    readOnly: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email...',
    disabled: true,
  },
}
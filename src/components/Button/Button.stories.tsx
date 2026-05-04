import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'ZenUI/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
}

export const Ghost: Story ={
    args: {
        variant: 'ghost',
        children: 'Edit',
    },
}

export const Destructive: Story ={
    args: {
        variant: 'destructive',
        children :'Delete Account',
    },
}

export const DestructiveGhost: Story={
    args:{
        variant: 'destructive-ghost',
        children: 'Remove',
    },
}

export const Inverse: Story={
    args:{
        variant: 'inverse',
        children: 'Get started',
    },
}

export const OutlineInverse: Story ={
    args:{
        variant: 'outline-inverse',
        children: 'Learn more'
    }
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
}

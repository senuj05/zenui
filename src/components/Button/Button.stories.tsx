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
    children: 'DEFAULT',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'SECONDARY',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'OUTLINE',
  },
}

export const Ghost: Story ={
    args: {
        variant: 'ghost',
        children: 'GHOST',
    },
}

export const Destructive: Story ={
    args: {
        variant: 'destructive',
        children :'DELETE',
    },
}

export const DestructiveGhost: Story={
    args:{
        variant: 'destructive-ghost',
        children: 'REMOVE',
    },
}

export const Inverse: Story={
    args:{
        variant: 'inverse',
        children: 'GET STARTED',
    },
}

export const OutlineInverse: Story ={
    args:{
        variant: 'outline-inverse',
        children: 'LEARN MORE',
    }
}

export const GhostInverse: Story ={
    args:{
        variant: 'ghost-inverse',
        children: 'CONTACT US',
    }
}   
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'ZenUI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#ffffff' },
        dark: { name: 'Dark', value: '#160505' },
      },
    },
  },
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

// Inverse variants are designed for dark surfaces, so render them on one.
export const Inverse: Story={
    args:{
        variant: 'inverse',
        children: 'GET STARTED',
    },
    globals: { backgrounds: { value: 'dark' } },
}

export const OutlineInverse: Story ={
    args:{
        variant: 'outline-inverse',
        children: 'LEARN MORE',
    },
    globals: { backgrounds: { value: 'dark' } },
}

export const GhostInverse: Story ={
    args:{
        variant: 'ghost-inverse',
        children: 'CONTACT US',
    },
    globals: { backgrounds: { value: 'dark' } },
}   
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> ={
    title: 'ZenUI/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
    args: {
        variant: 'default',
        children: 'DEFAULT',
    },
}

export const Round: Story = {
    args: {
        variant: 'round',
        children: 'ROUND',
    },
}
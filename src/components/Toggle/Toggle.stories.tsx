import type { Meta, StoryObj} from '@storybook/react-vite'
import { Toggle } from './Toggle'
import { title } from 'process'

const meta: Meta<typeof Toggle> ={
    title: 'ZenUI/Toggle',
    component: Toggle,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
    args: {
        variant: 'default',
        title: 'Default Toggle',
    },
}   
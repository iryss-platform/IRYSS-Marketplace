import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio'

const meta = {
  title: 'B2C/Atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
  },
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    checked: false,
  },
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const RadioGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Radio checked={true} />
        <span>Option A (selected)</span>
      </div>
      <div className="flex items-center gap-2">
        <Radio checked={false} />
        <span>Option B</span>
      </div>
      <div className="flex items-center gap-2">
        <Radio checked={false} />
        <span>Option C</span>
      </div>
    </div>
  ),
}

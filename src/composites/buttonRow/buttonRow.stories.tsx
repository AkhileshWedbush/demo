import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ButtonRow } from './buttonRow'

export default {
  title: 'composites/ButtonRow',
  component: ButtonRow,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonRow>
const Template: ComponentStory<typeof ButtonRow> = (args) => (
  <ButtonRow {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  // label: "Non-Retirement Accounts ",
  // text: "Total: $2345667",
}

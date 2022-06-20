import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardHeader } from './CardHeader'

export default {
  title: 'composites/CardHeader',
  component: CardHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CardHeader>
const Template: ComponentStory<typeof CardHeader> = (args) => (
  <CardHeader {...args} />
)
export const Primary = Template.bind({})
Primary.args = {
  label: 'Non-Retirement Accounts ',
  text: 'Total: $2345667',
}

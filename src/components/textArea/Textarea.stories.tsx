import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Textarea } from './Textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
)

export const Regular = Template.bind({})
Regular.args = {
  placeholder: 'Hello',
}

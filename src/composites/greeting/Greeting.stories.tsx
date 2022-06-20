import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Greeting } from './Greeting'

export default {
  title: 'Composites/Greeting',

  component: Greeting,
} as ComponentMeta<typeof Greeting>

const Template: ComponentStory<typeof Greeting> = (args) => (
  <Greeting {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  userName: 'User',
}

export const Secondary = Template.bind({})
Secondary.args = {
  userName: 'Shravs',
}

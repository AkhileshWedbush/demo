// import { Textbox } from './Textbox'
// import { ComponentMeta, ComponentStory } from '@storybook/react'

// export default {
//   title: 'Components/Textbox',
//   Component: Textbox,
// } as ComponentMeta<typeof Textbox>

// const Template: ComponentStory<typeof Textbox> = (args) => <Textbox {...args} />

// export const Regular = Template.bind({})
// Regular.args = {
//   placeholder: 'Hello',
// }
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Textbox } from './Textbox'
export default {
  title: 'Components/Textbox',
  component: Textbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Textbox>

const Template: ComponentStory<typeof Textbox> = (args) => <Textbox {...args} />

export const Default = () => (
  <Textbox type="text" placeholder="Type here" value="John"></Textbox>
)

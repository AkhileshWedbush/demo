import ButtonGroup from './ButtonGroup'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Composites/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
)

export const Buttons = Template.bind({})
Buttons.args = {
  backgroundColor: 'none',
}

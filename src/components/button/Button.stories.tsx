import Button from './Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Colors, Backgrounds } from '../../shared/styles'

export default {
  title: 'components/ButtonClientLink',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const DefaultPrimary = Template.bind({})
DefaultPrimary.args = {
  bgColor: Backgrounds.Primary50,
  color: Colors.White,
  title: 'Default',
}

export const HoverPrimary = Template.bind({})
HoverPrimary.args = {
  bgColor: Backgrounds.Primary20,
  color: Colors.White,
  title: 'Hover',
}

export const PressedPrimary = Template.bind({})
PressedPrimary.args = {
  bgColor: Backgrounds.Primary80,
  color: Colors.White,
  title: 'Pressed',
}

export const FocusPrimary = Template.bind({})
FocusPrimary.args = {
  bgColor: Backgrounds.Primary50,
  color: Colors.White,
  title: 'Focus',
}

export const DisabledPrimary = Template.bind({})
DisabledPrimary.args = {
  bgColor: Backgrounds.Gray40,
  color: Colors.White,
  title: 'Disabled',
}
export const DefaultSecondary = Template.bind({})
DefaultSecondary.args = {
  bgColor: Backgrounds.Primary50,
  color: Colors.White,
  title: 'Default',
}

export const HoverSecondary = Template.bind({})
HoverSecondary.args = {
  bgColor: Backgrounds.Primary20,
  color: Colors.White,
  title: 'Hover',
}

export const PressedSecondary = Template.bind({})
PressedSecondary.args = {
  bgColor: Backgrounds.Primary80,
  color: Colors.White,
  title: 'Pressed',
}

export const FocusSecondary = Template.bind({})
FocusSecondary.args = {
  bgColor: Backgrounds.Primary50,
  color: Colors.White,
  title: 'Focus',
}

export const DisabledSecondary = Template.bind({})
DisabledSecondary.args = {
  bgColor: Backgrounds.Gray40,
  color: Colors.White,
  title: 'Disabled',
}

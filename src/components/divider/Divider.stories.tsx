import Divider from './Divider'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BorderColors } from '../../shared/styles'

export default {
  title: 'Components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />

export const HorizontalSmall = Template.bind({})
HorizontalSmall.args = {
  borderColor: BorderColors.Gray10,
  horizontal: true,
  borderHeight: '0.0625rem',
}

export const HorizontalMedium = Template.bind({})
HorizontalMedium.args = {
  borderColor: BorderColors.Gray10,
  horizontal: true,
  borderHeight: '0.125rem',
}

export const HorizontalLarge = Template.bind({})
HorizontalLarge.args = {
  borderColor: BorderColors.Gray10,
  horizontal: true,
  borderHeight: '0.25rem',
}

export const VerticalSmall = Template.bind({})
VerticalSmall.args = {
  borderColor: BorderColors.Gray10,
  horizontal: false,
  borderHeight: '0.0625rem',
}

export const VerticalMedium = Template.bind({})
VerticalMedium.args = {
  borderColor: BorderColors.Gray10,
  horizontal: false,
  borderHeight: '0.125rem',
}

export const VerticalLarge = Template.bind({})
VerticalLarge.args = {
  borderColor: BorderColors.Gray10,
  horizontal: false,
  borderHeight: '0.25rem',
}

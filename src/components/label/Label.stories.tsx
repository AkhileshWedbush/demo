import Label from './Label'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Colors } from '../../shared/styles'

export default {
  title: 'Components/Label',
  component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Heading = Template.bind({})
Heading.args = {
  fontSize: '16px',
  fontStyle: 'regular',
  fontWeight: 400,
  lineHeight: '24px',
  color: Colors.Gray70,
  label: 'Hello',
  letterSpacing: '0.02em',
}

export const SideBarMenuList = Template.bind({})
SideBarMenuList.args = {
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '24px',
  color: Colors.White,
  label: 'Hello',
  letterSpacing: '0.02em',
}

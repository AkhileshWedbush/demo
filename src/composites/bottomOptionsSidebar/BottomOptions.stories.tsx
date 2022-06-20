import BottomOptions from './BottomOptions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Composites/BottomOptions',
  Component: BottomOptions,
} as ComponentMeta<typeof BottomOptions>

const Template: ComponentStory<typeof BottomOptions> = (args) => (
  <BottomOptions {...args} />
)

export const BottomList = Template.bind({})
BottomList.args = {
  bgColor: '',
}

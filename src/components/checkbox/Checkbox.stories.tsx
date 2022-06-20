import Checkbox from './Checkbox'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Backgrounds } from '../../shared/styles'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  bgColor: Backgrounds.White,
  title: 'Label',
  checkBoxId: 'checkbox',
  disabled: true,
}

import { ComponentStory, ComponentMeta } from '@storybook/react'
import SmallWidget from './SmallWidget'
import { Icons } from '../../shared/GlobalStyle'
export default {
  title: 'composites/SmallWidget',
  component: SmallWidget,
} as ComponentMeta<typeof SmallWidget>
const Template: ComponentStory<typeof SmallWidget> = (args) => (
  <SmallWidget {...args} />
)
export const Primary = Template.bind({})
Primary.args = {
  label: 'Email',
  label1: 'advisor1@example.com',
  icon: Icons.SendEmail,
  icon1: Icons.ChevronRight,
}

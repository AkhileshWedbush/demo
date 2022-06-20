import { ComponentStory, ComponentMeta } from '@storybook/react'
import AdvisorWidget from './AdvisorWidget'
export default {
  title: 'Composites/AdvisorWidget',

  component: AdvisorWidget,
} as ComponentMeta<typeof AdvisorWidget>

const Template: ComponentStory<typeof AdvisorWidget> = (args) => (
  <AdvisorWidget {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  label1: 'Contact Your Advisor',
  label2: 'Financial Advisor',
  label3: 'Allan Cooper',
}
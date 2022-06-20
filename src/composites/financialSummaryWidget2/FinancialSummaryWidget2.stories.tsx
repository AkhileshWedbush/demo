import { ComponentStory, ComponentMeta } from '@storybook/react'
import FinancialSummaryWidget2 from './FinancialSummaryWidget2'

export default {
  title: 'composites/FinancialSummaryWidget2',
  component: FinancialSummaryWidget2,
} as ComponentMeta<typeof FinancialSummaryWidget2>
const Template: ComponentStory<typeof FinancialSummaryWidget2> = (args) => (
  <FinancialSummaryWidget2 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: "Today's Gain/Loss",
  text: '+6,239.12',
  text1: '4.23%',
}

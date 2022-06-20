import { ComponentStory, ComponentMeta } from '@storybook/react'
import FinancialSummaryWidget1 from './FinancialSummaryWidget1'

export default {
  title: 'composites/FinancialSummaryWidget1',
  component: FinancialSummaryWidget1,
} as ComponentMeta<typeof FinancialSummaryWidget1>
const Template: ComponentStory<typeof FinancialSummaryWidget1> = (args) => (
  <FinancialSummaryWidget1 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Total HouseHold Value',
  text: '$1,129,924.42',
}

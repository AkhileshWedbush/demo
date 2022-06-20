import { ComponentStory, ComponentMeta } from '@storybook/react'
import FinancialSummaryWidget3 from './FinancialSummaryWidget3'

export default {
  title: 'composites/FinancialSummaryWidget3',
  component: FinancialSummaryWidget3,
} as ComponentMeta<typeof FinancialSummaryWidget3>
const Template: ComponentStory<typeof FinancialSummaryWidget3> = (args) => (
  <FinancialSummaryWidget3 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Projected Income Over Next 12 Mos',
  text: '$29,924.42',
  text1: '20.00%',
}

import DoughnutChart from './DoughnutChart'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Backgrounds } from '../../shared/styles'

export default {
  title: 'Components/DoughnutChart',
  component: DoughnutChart,
} as ComponentMeta<typeof DoughnutChart>

const Template: ComponentStory<typeof DoughnutChart> = (args) => (
  <DoughnutChart {...args} />
)

export const DoughnutChartPrimary = Template.bind({})
DoughnutChartPrimary.args = {
  legendLabels: ['Equity: 93%', 'Fixed Income: 2%', 'Cash 1%'],
  title: 'Asset Allocation',
  dataValues: [97, 2, 1],
  bgColors: [
    Backgrounds.Primary20,
    Backgrounds.Primary70,
    Backgrounds.Primary90,
  ],
  borderColors: [Backgrounds.White, Backgrounds.White, Backgrounds.White],
  borderWidth: 0
}

export const DoughnutChartSecondary = Template.bind({})
DoughnutChartSecondary.args = {
  legendLabels: ['Adults: 77%', 'Kids & Teenagers: 15%', 'Old: 8%'],
  title: 'Asset Allocation',
  dataValues: [77, 15, 8],
  bgColors: [Backgrounds.Info100, Backgrounds.Info800, Backgrounds.Brand1],
  borderColors: [Backgrounds.White, Backgrounds.White, Backgrounds.White],
  borderWidth: 0
}

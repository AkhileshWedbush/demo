import { ComponentStory, ComponentMeta } from '@storybook/react'
import Accounts from './Accounts'

export default {
  title: 'composites/Accounts',
  component: Accounts,
} as ComponentMeta<typeof Accounts>
const Template: ComponentStory<typeof Accounts> = (args) => (
  <Accounts {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'General Investment-Brokerage-3456',
  text: '$423,721.66',
  text1: '-$132.94',
  text2: '-4.23%',
  text3: 'View Balance',
}

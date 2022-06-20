import SidebarDrop from './SidebarDrop'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'composites/SidebarMenuDrop',
  component: SidebarDrop,
} as ComponentMeta<typeof SidebarDrop>

const Template: ComponentStory<typeof SidebarDrop> = (args) => (
  <SidebarDrop {...args} />
)

export const DocumentsListItem = Template.bind({})
DocumentsListItem.args = {
  bgColor: '#FFFFFF',
  label: 'Documents',
  color: '#374253',
  icon: require('../../assets/icons/size16/Document.png'),
}

export const Account = Template.bind({})
Account.args = {
  bgColor: '#FFFFFF',
  label: 'Account',
  color: '#374253',
  icon: require('../../assets/icons/size16/Accounts.png'),
}

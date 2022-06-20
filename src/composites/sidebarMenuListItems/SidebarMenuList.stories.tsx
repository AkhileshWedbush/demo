import SidebarMenuListItems from './SidebarMenuListItems'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'composites/SidebarMenuListItems',
  component: SidebarMenuListItems,
} as ComponentMeta<typeof SidebarMenuListItems>

const Template: ComponentStory<typeof SidebarMenuListItems> = (args) => (
  <SidebarMenuListItems {...args} />
)

export const DocumentsListItem = Template.bind({})
DocumentsListItem.args = {
  label: 'Messages',
  icon: require('../../assets/icons/size16/Message.png'),
}

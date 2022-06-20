import SidebarMenuList from './SidebarMenuList'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'composites/SidebarMenuList',
  component: SidebarMenuList,
} as ComponentMeta<typeof SidebarMenuList>

const Template: ComponentStory<typeof SidebarMenuList> = (args) => (
  <SidebarMenuList {...args} />
)

export const MenuList = Template.bind({})

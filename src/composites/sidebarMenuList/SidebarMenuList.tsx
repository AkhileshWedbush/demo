import SidebarDrop from '../sidebarMenuDrop/SidebarDrop'
import SidebarMenuListItems from '../sidebarMenuListItems/SidebarMenuListItems'
import { Wrapper } from './styles'

interface SidebarMenuListProps {
  bgColor?: string
}

/**
 * Groups all the sidebar items into one.
 */
const SidebarMenuList = ({ bgColor }: SidebarMenuListProps) => {
  return (
    <Wrapper>
      <SidebarDrop
        label={'Account'}
        color={'#374253'}
        icon={require('../../assets/icons/size16/Accounts.png')}
        alt={'Accounts icon'}
      />
      <SidebarDrop
        label={'Documents'}
        color={'#374253'}
        icon={require('../../assets/icons/size16/Document.png')}
        alt={'Document icon'}
      />
      <SidebarMenuListItems
        label={'Messages'}
        icon={require('../../assets/icons/size16/Message.png')}
        alt={'Messages icon'}
      />
      <SidebarMenuListItems
        label={'Wedbush Research'}
        icon={require('../../assets/icons/size16/Research.png')}
        alt={'Research icon'}
      />
      <SidebarMenuListItems
        label={'Quotes & Charts'}
        icon={require('../../assets/icons/size16/Quotes.png')}
        alt={'Quotes icon'}
      />
      <SidebarMenuListItems
        label={'Calculators'}
        icon={require('../../assets/icons/size16/Calculation.png')}
        alt={'Calculations icon'}
      />
    </Wrapper>
  )
}

export default SidebarMenuList

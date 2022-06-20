import { Wrapper, Hr, BottomOptionsProps } from './styles'
import SidebarMenuListItems from '../sidebarMenuListItems/SidebarMenuListItems'
import Divider from '../../components/divider/Divider'

/**
 * Creates the group of bottom option - setting and sign out grouped with icons and labels
 */
const BottomOptions = ({ bgColor }: BottomOptionsProps) => {
  return (
    <Wrapper bgColor={bgColor}>
      <Hr>
        <Divider
          borderColor={'#f0f2f5'}
          horizontal={true}
          borderHeight={'0.0625rem'}
        />
      </Hr>
      <SidebarMenuListItems
        label={'Settings'}
        icon={require('../../assets/icons/size16/Setting.png')}
        alt={'Settings icon'}
      />
      <SidebarMenuListItems
        label={'Sign out'}
        icon={require('../../assets/icons/size16/Logout.png')}
        alt={'Logout icon'}
      />
    </Wrapper>
  )
}

export default BottomOptions

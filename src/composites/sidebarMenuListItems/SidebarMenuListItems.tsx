import {
  Wrapper,
  StyledLabel,
  IconWrapper,
  SidebarMenuListItemsProps
} from './styles'

import Image from '../../components/image/Image'
import Label from '../../components/label/Label'

/**
 * Creates a sidebar menu item with customizable icon and background color.
 */
const SidebarMenuListItems = ({
  label,
  icon,
  isMenuOpen = true,
  alt,
}: SidebarMenuListItemsProps) => {
  return (
    // <StyledLink to={'/' + label?.toLowerCase().replace(/\s/g, '-')}>
    <Wrapper>
      <IconWrapper>
        <Image image={icon} alt={alt}></Image>
      </IconWrapper>
      {isMenuOpen && (
        <StyledLabel>
          <Label
            fontStyle={'regular'}
            fontWeight={400}
            fontSize={'1rem'}
            lineHeight={'1.5rem'}
            color={''}
            label={label}
          />
        </StyledLabel>
      )}
    </Wrapper>
    // </StyledLink>
  )
}

export default SidebarMenuListItems

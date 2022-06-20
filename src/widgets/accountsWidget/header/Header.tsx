import { RootContainer, StyledItemGroup } from './styles'

import { Icons } from '../../../shared/GlobalStyle'

interface HeaderProps {
  accordionHandler: React.MouseEventHandler<HTMLDivElement>
  isCollapsed: boolean
}

const Header = (Props: HeaderProps) => {
  const isCollapsed = Props.isCollapsed

  return (
    <RootContainer>
      <p>Non-Retirement Accounts</p>
      <StyledItemGroup onClick={Props.accordionHandler}>
        <h3>Total: $546,962.23</h3>
        {isCollapsed ? (
          <img src={Icons.ChevronUp} alt="Cheveron Up" />
        ) : (
          <img src={Icons.ChevronDown} alt="Cheveron Down" />
        )}
      </StyledItemGroup>
    </RootContainer>
  )
}

export default Header

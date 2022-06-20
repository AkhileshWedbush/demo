import { Link } from 'react-router-dom'

import Image from '../../../components/image/Image'

import {
  RootContainer,
  StyledLogoContainer,
  StyledMenuListContainer,
  StyledBottomContainer,
} from './styles'

import { Icons } from '../../../shared/GlobalStyle'

import { MenuItem, ProfileMenuItem, FooterMenu } from './menuItem/MenuItem'

interface SidePaneContentProps {
  isSideMenuOpen: boolean
}

const SidePaneContent = (Props: SidePaneContentProps) => {
  const isMenuOpen = Props.isSideMenuOpen

  const imageSrc = isMenuOpen
    ? Icons.WedbushLogoSmall
    : Icons.WedbushLogoOnlySmall

  return (
    <RootContainer>
      <StyledLogoContainer>
        <Link to="/">
          <Image image={imageSrc} alt={'Wedbush Logo'} />
        </Link>
      </StyledLogoContainer>
      <StyledMenuListContainer>
        <ProfileMenuItem isSideMenuOpen={Props.isSideMenuOpen} />
        <MenuItem isSideMenuOpen={Props.isSideMenuOpen} />
      </StyledMenuListContainer>

      <StyledBottomContainer>
        <FooterMenu isSideMenuOpen={Props.isSideMenuOpen} />
      </StyledBottomContainer>
    </RootContainer>
  )
}

export default SidePaneContent

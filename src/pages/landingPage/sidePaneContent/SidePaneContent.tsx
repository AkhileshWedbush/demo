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
import Divider from '../../../components/divider/Divider'

interface SidePaneContentProps {
  isSideMenuOpen: boolean
}

const SidePaneContent = (Props: SidePaneContentProps) => {
  const isMenuOpen = Props.isSideMenuOpen

  const imageSrc = isMenuOpen
    ? Icons.wedbush
    : Icons.Wedbushlogo

  return (
    <RootContainer>
      <StyledLogoContainer>
        <Link to="/">
          <Image image={imageSrc} alt={'Wedbush Logo'} />
        </Link>
      </StyledLogoContainer>
      <StyledMenuListContainer id="t3"> 
        <ProfileMenuItem  isSideMenuOpen={Props.isSideMenuOpen}  />
        <Divider thickness={'1px'} horizontal={true} bgColor={'#CBD5E1;'}></Divider>
        <MenuItem isSideMenuOpen={Props.isSideMenuOpen}  />
      </StyledMenuListContainer>

      <StyledBottomContainer>
        <FooterMenu isSideMenuOpen={Props.isSideMenuOpen} />
      </StyledBottomContainer>
    </RootContainer>
  )
}

export default SidePaneContent

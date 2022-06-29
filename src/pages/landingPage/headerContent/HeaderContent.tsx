import styled from 'styled-components'
import { RootContainer, PageHeadingWrapper } from './styles'
import { Icons } from '../../../shared/GlobalStyle'

//import StockWidget from '../../../widgets/stockWidget/StockWidget'

const StyledToggleControl = styled.div`
  position: relative;
`
const StyledSliderToggle = styled.div`
  /* display: none; */
  position: absolute;
  background-color: salmon;
  width: 32px;
  height: 32px;
  left: -50px;
  top: -10px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface HeaderContentProps {
  toggleMenuHandler: React.MouseEventHandler<HTMLDivElement>
  isSideMenuOpen: boolean
}

const HeaderContent = (Props: HeaderContentProps) => {
  const isSideMenuOpen = Props.isSideMenuOpen

  return (
    <RootContainer>
      <PageHeadingWrapper>
        <StyledToggleControl>
        <h3>Operation Hub</h3>
          <StyledSliderToggle onClick={Props.toggleMenuHandler}>
            {isSideMenuOpen ? (
              <img src={Icons.ChevronLeft} alt="toggle" />
            ) : (
              <img src={Icons.ChevronRight} alt="toggle" />
            )}
          </StyledSliderToggle>
        </StyledToggleControl>
      </PageHeadingWrapper>
    </RootContainer>
  )
}

export default HeaderContent

import {
  RootContainer,
  StyledPanel,
  StyledImageWrapper,
  StyledItemNameValueWrapper,
} from './styles'

import { Icons } from '../../shared/GlobalStyle'
import { AdvisorMenuMenuList, AdvisorMenuItem } from './AdvisorMenuListData'

const ChevronImage = () => {
  return (
    <StyledImageWrapper>
      <img src={Icons.ChevronRight} alt="Cheveron Right" />
    </StyledImageWrapper>
  )
}

const MenuItemList = () => {
  return (
    <>
      {AdvisorMenuMenuList.map((item: AdvisorMenuItem) => {
        return (
          <StyledPanel key={item.id}>
            <StyledImageWrapper>
              <img src={item.src} alt={item.alt} />
            </StyledImageWrapper>
            <StyledItemNameValueWrapper>
              <p>{item.name}</p>
              <h3>{item.value}</h3>
            </StyledItemNameValueWrapper>
            <ChevronImage />
          </StyledPanel>
        )
      })}
    </>
  )
}

const AdvisorWidget = () => {
  return (
    <RootContainer>
      <h3>Contact Your Advisor</h3>
      <MenuItemList />
    </RootContainer>
  )
}

export default AdvisorWidget

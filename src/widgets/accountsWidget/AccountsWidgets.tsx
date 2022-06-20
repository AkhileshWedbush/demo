import {
  RootContainer,
  StyledAccountContainer,
  StyledTitleContainer,
  StyledSummaryContainer,
  StyledDropdownContainer,
  StyledButtonsContainer,
} from './styles'

import { HoldingsButton, ActivityButton } from './buttons/Buttons'

import Header from './header/Header'

import { useState } from 'react'

const AccountButtons = () => {
  return (
    <StyledButtonsContainer>
      <HoldingsButton />
      <ActivityButton />
      <button>More</button>
    </StyledButtonsContainer>
  )
}

const AccountContainer = () => {
  return (
    <StyledAccountContainer>
      <StyledTitleContainer>
        <p>General Investment - Brokerage - 3456</p>
        <AccountButtons />
      </StyledTitleContainer>
      <StyledSummaryContainer>
        <h2>$345,345.78</h2>
        <h2>-$121.23</h2>
        <h2>-4.23%</h2>
      </StyledSummaryContainer>
      <StyledDropdownContainer>View Balance</StyledDropdownContainer>
    </StyledAccountContainer>
  )
}

const AccountsWidget = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  function accordionHandler() {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <RootContainer>
      <Header isCollapsed={isCollapsed} accordionHandler={accordionHandler} />
      {!isCollapsed && <AccountContainer />}
    </RootContainer>
  )
}

export default AccountsWidget

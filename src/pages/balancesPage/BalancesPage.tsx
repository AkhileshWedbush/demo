import React from 'react'
import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import ContentHeader from './contentHeader/ContentHeader'
import AllAccountsPanel from './allAccountsPanel/AllAccountsPanel'
import CashSummaryPanel from './cashSummaryPanel/CashSummaryPanel'

import { RootContainer } from './styles'

const BalanceContent = () => {
  return (
    <RootContainer>
      <ContentHeader />
      <AllAccountsPanel />
      <CashSummaryPanel />
      {/* 
      <StocksSummaryPanel />
      <AssetsAllocationPanel /> */}
    </RootContainer>
  )
}

const BalancesPage = () => {
  return (
    <LandingPageLayout>
      <BalanceContent />
    </LandingPageLayout>
  )
}

export default BalancesPage

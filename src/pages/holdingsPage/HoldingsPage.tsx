import React from 'react'
import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import ContentHeader from './contentHeader/ContentHeader'

import AllAccountsPanel from './allAccountsPanel/AllAccountsPanel'
import CashSummaryPanel from './cashSummaryPanel/CashSummaryPanel'
import AssetsAllocationPanel from './assetsAllocationPanel/AssetsAllocationPanel'
import StocksSummaryPanel from './stocksSummaryPanel/StocksSummaryPanel'

import { RootContainer } from './styles'

const HoldingsContent = () => {
  return (
    <RootContainer>
      <ContentHeader />
      <AllAccountsPanel />
      <CashSummaryPanel />
      <StocksSummaryPanel />
      <AssetsAllocationPanel />
    </RootContainer>
  )
}

const HoldingsPage = () => {
  return (
    <LandingPageLayout>
      <HoldingsContent />
    </LandingPageLayout>
  )
}

export default HoldingsPage

import React from 'react'
import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import { RootContainer } from './styles'

import BetaFailAnalysisPanel from './BetaFailAnalysisPanel/betFailAnalysisPanel'

const BetaFailAnalysisContent = () => {
  return (
    <RootContainer>
      <BetaFailAnalysisPanel />
    </RootContainer>
  )
}

const BetaFailAnalysis = () => {
  return (
    <LandingPageLayout>
      <BetaFailAnalysisContent />
    </LandingPageLayout>
  )
}

export default BetaFailAnalysis

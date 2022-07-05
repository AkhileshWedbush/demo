import React from 'react'
import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import { RootContainer } from './styles'
import BetaFailAnalysisHistory from './BetaFailAnalysisPanel/betaFailAnalysisHistory'

const BetaFailAnalysisContent = () => {
  return (
    <RootContainer id="T3">
      <BetaFailAnalysisHistory />
    </RootContainer>
  )
}

const BetaFailHistory = () => {
  return (
    <LandingPageLayout>
      <BetaFailAnalysisContent />
    </LandingPageLayout>
  )
} 

export default BetaFailHistory

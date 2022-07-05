import React from 'react'
import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import { RootContainer } from './styles'
import BetaFailAnalysisDaily from './BetaFailAnalysisPanel/betFailAnalysisDaily'

const BetaFailAnalysisContent = () => {
  return (
    <RootContainer id="T2">
      <BetaFailAnalysisDaily />
    </RootContainer>
  )
}

const BetaFailDaily = () => {
  return (
    <LandingPageLayout>
      <BetaFailAnalysisContent />
    </LandingPageLayout>
  )
} 

export default BetaFailDaily

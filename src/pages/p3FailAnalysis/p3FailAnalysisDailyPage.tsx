import React from 'react'
import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import { RootContainer } from './styles'
import P3FailAnalysisDaily from './P3FailAnalysisPanel/P3FailAnalysisDaily'

const P3FailAnalysisContent = () => {
  return (
    <RootContainer id="T2">
      <P3FailAnalysisDaily />
    </RootContainer>
  )
}

const P3FailDaily = () => {
  return (
    <LandingPageLayout>
      <P3FailAnalysisContent />
    </LandingPageLayout>
  )
}

export default P3FailDaily

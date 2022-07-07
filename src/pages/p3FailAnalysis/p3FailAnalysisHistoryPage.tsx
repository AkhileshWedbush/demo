import React from 'react'
import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import { RootContainer } from './styles'
import P3FailAnalysisHistory from './P3FailAnalysisPanel/p3FailAnalysisHistory'

const P3FailAnalysisContent = () => {
  return (
    <RootContainer id="T3">
      <P3FailAnalysisHistory />
    </RootContainer>
  )
}

const P3FailHistory = () => {
  return (
    <LandingPageLayout>
      <P3FailAnalysisContent />
    </LandingPageLayout>
  )
}

export default P3FailHistory

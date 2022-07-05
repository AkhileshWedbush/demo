import React from 'react'
import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import { RootContainer } from './styles'

import P3FailAnalysisPanel from './P3FailAnalysisPanel/p3FailAnalysisPanel'

const P3FailAnalysisContent = () => {
  return (
    <RootContainer id="T2">
      <P3FailAnalysisPanel />
    </RootContainer>
  )
}

const P3FailAnalysis = () => {
  return (
    <LandingPageLayout>
      <P3FailAnalysisContent />
    </LandingPageLayout>
  )
}

export default P3FailAnalysis

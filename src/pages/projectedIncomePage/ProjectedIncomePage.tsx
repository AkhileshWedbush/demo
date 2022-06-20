import React from 'react'
import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'

import { RootContainer } from './styles'
import ContentHeader from './contentHeader/ContentHeader'
import ProjectIncomePanel from './projectIncomePanel/ProjectIncomePanel'
import EstimatedIncomePanel from './estimatedIncomePanel/EstimatedIncomePanel'

const ProjectedIncomeContent = () => {
  return (
    <RootContainer>
      <ContentHeader />
      <ProjectIncomePanel />
      <EstimatedIncomePanel />
    </RootContainer>
  )
}

const ProjectedIncomePage = () => {
  return (
    <LandingPageLayout>
      <ProjectedIncomeContent />
    </LandingPageLayout>
  )
}

export default ProjectedIncomePage

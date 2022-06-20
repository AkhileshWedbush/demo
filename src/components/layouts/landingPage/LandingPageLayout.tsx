import React, { FC } from 'react'

import { GlobalStyle } from './styles'

import ContainerLayout from '../container/ContainerLayout'

interface childProps {
  children: React.ReactElement
}

const LandingPageLayout: FC<childProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ContainerLayout>{children}</ContainerLayout>
    </>
  )
}

export default LandingPageLayout

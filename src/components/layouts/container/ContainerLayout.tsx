import React, { FC } from 'react'
import StyledContainer from './styles'

interface childProps {
  children: React.ReactElement
}

const ContainerLayout: FC<childProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default ContainerLayout

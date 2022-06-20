import React, { FC } from 'react'
import StyledSidePane from './styles'

interface childProps {
  children: React.ReactElement
}

const SidePaneLayout: FC<childProps> = ({ children }) => {
  return <StyledSidePane>{children}</StyledSidePane>
}

export default SidePaneLayout

import React from 'react'

import { StyledButtonRow, StyledLinkButtons } from './styles'
import { LinkButtons } from '../linkButtons/LinkButtons'

const ButtonRow = () => {
  return (
    <StyledButtonRow>
      <p>As of Today</p>
      <StyledLinkButtons>
        <LinkButtons />
      </StyledLinkButtons>
    </StyledButtonRow>
  )
}

export default ButtonRow

import React from 'react'
import { StyledContentHeader } from './styles'

import AccountSelect from '../../../components/accountSelect/AccountSelect'

import ButtonRow from '../../pageComponents/buttonRow/ButtonRow'

const ContentHeader = () => {
  return (
    <StyledContentHeader>
      <h2>Projected Income</h2>
      <AccountSelect />
      <ButtonRow />
    </StyledContentHeader>
  )
}

export default ContentHeader

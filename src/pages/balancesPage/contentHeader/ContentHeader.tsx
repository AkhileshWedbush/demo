import React from 'react'
import {
  StyledContentHeader,
  // StyledLinkButtons,
  // StyledButtonRow,
} from './styles'

import AccountSelect from '../../../components/accountSelect/AccountSelect'
import ButtonRow from '../../pageComponents/buttonRow/ButtonRow'

const ContentHeader = () => {
  return (
    <StyledContentHeader>
      <h2>Account Balances</h2>
      <div>
        <AccountSelect />
      </div>
      <ButtonRow />
    </StyledContentHeader>
  )
}

export default ContentHeader

import {
  RootContainer,
  StyledPanelHead,
  StyledPanelHeadTitle,
  StyledPanelHeadTotal,
  StyledTableContainer,
  StyledPanelMonthSelect,
} from './styles'

import Next12MonthsTable from './table/EstimatedIncomeTable'
import MonthSelect from '../../../components/monthSelect/MonthSelect'

const EstimatedIncomePanel = () => {
  return (
    <RootContainer>
      <StyledPanelHead>
        <StyledPanelHeadTitle>
          <h3>January 2022 Estimated Income</h3>
          <div>Dividends & Interest</div>
        </StyledPanelHeadTitle>
        <StyledPanelHeadTotal>
          <p>Total Estimated Amount</p>
          <h3>$24.34</h3>
        </StyledPanelHeadTotal>
      </StyledPanelHead>
      <StyledPanelMonthSelect>
        <MonthSelect />
      </StyledPanelMonthSelect>
      <StyledTableContainer>
        <Next12MonthsTable />
      </StyledTableContainer>
    </RootContainer>
  )
}

export default EstimatedIncomePanel

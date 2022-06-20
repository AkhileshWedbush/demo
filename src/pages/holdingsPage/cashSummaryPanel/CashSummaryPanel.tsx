import {
  RootContainer,
  StyledPanelHead,
  StyledPanelHeadTitle,
  StyledPanelHeadTotal,
  StyledTableContainer,
} from './styles'

import CashSummaryTable from './table/CashSummaryTable'

const CashSummaryPanel = () => {
  return (
    <RootContainer>
      <StyledPanelHead>
        <StyledPanelHeadTitle>Cash</StyledPanelHeadTitle>
        <StyledPanelHeadTotal>Total $345,234.23</StyledPanelHeadTotal>
      </StyledPanelHead>
      <StyledTableContainer>
        <CashSummaryTable />
      </StyledTableContainer>
    </RootContainer>
  )
}

export default CashSummaryPanel

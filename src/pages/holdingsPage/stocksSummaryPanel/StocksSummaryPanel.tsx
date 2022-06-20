import {
  RootContainer,
  StyledPanelHead,
  StyledPanelHeadTitle,
  StyledPanelHeadTotal,
  StyledTableContainer,
} from './styles'

import StocksMoreTable from './table/StocksMoreTable'

const StocksSummaryPanel = () => {
  return (
    <RootContainer>
      <StyledPanelHead>
        <StyledPanelHeadTitle>Stocks & Related</StyledPanelHeadTitle>
        <StyledPanelHeadTotal>Total $45,034.23</StyledPanelHeadTotal>
      </StyledPanelHead>
      <StyledTableContainer>
        <StocksMoreTable />
      </StyledTableContainer>
    </RootContainer>
  )
}

export default StocksSummaryPanel

import {
  RootContainer,
  StyledPanelHead,
  StyledPanelHeadTitle,
  StyledPanelHeadTotal,
  StyledTableContainer,
  StyledContentWrapper,
  StyledChartContainer,
} from './styles'

import { Icons } from '../../../shared/GlobalStyle'
import Chart from './chart/Chart'
import EquityAllocationTable from './table/equityAllocationTable/EquityAllocationTable'

function ContentSection() {
  return (
    <StyledContentWrapper>
      <StyledChartContainer>
        <Chart />
      </StyledChartContainer>
      <div>
        <EquityAllocationTable />
      </div>
    </StyledContentWrapper>
  )
}
const AssetsAllocationPanel = () => {
  return (
    <RootContainer>
      <StyledPanelHead>
        <StyledPanelHeadTitle>Asset Allocation</StyledPanelHeadTitle>
        <StyledPanelHeadTotal>
          <img src={Icons.ChevronUp} alt="" />
        </StyledPanelHeadTotal>
      </StyledPanelHead>
      <StyledTableContainer>
        <ContentSection />
      </StyledTableContainer>
    </RootContainer>
  )
}

export default AssetsAllocationPanel

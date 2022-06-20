import {
  RootContainer,
  StyledPanelHead,
  StyledPanelHeadTitle,
  StyledPanelHeadTotal,
  StyledTableContainer,
} from './styles'

import Next12MonthsTable from './table/Next12MonthsTable'

const ProjectIncomePanel = () => {
  return (
    <RootContainer>
      <StyledPanelHead>
        <StyledPanelHeadTitle>
          Projected Income Over Next 12 Months
        </StyledPanelHeadTitle>
        <StyledPanelHeadTotal>Total $14,034.23</StyledPanelHeadTotal>
      </StyledPanelHead>
      <StyledTableContainer>
        <Next12MonthsTable />
      </StyledTableContainer>
    </RootContainer>
  )
}

export default ProjectIncomePanel

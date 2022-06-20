import { RootContainer } from './styles'

interface financialSummaryWidgetProps {
  title: string
  children: React.ReactNode
}

const FinancialSummaryWidget = ({
  title,
  children,
}: financialSummaryWidgetProps) => {
  return (
    <RootContainer>
      <p>{title}</p>
      {/* <StyledDataPanel> */}
      {/* <h2>$1,129,345,42</h2>
        <p>20.00%</p> */}
      {children}
      {/* </StyledDataPanel> */}
    </RootContainer>
  )
}

export default FinancialSummaryWidget

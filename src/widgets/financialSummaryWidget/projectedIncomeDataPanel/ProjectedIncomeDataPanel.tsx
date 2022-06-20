import { RootContainer } from './styles'

interface dataPanelProps {
  totalValue: string
}

export const ProjectedIncomeDataPanel = ({ totalValue }: dataPanelProps) => {
  return (
    <RootContainer>
      <h2>{totalValue}</h2>
    </RootContainer>
  )
}

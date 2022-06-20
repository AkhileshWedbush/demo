import { RootContainer, StyledGainPart, StyledLossPart } from './styles'

interface dataPanelProps {
  returnRate: string
  isLoss: boolean
}

export const RateOfReturnDataPanel = ({
  returnRate,
  isLoss,
}: dataPanelProps) => {
  return (
    <RootContainer>
      {isLoss ? (
        <StyledGainPart>- {returnRate}</StyledGainPart>
      ) : (
        <StyledLossPart>+ {returnRate}</StyledLossPart>
      )}
    </RootContainer>
  )
}

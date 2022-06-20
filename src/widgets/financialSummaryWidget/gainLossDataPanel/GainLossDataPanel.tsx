import { RootContainer, StyledGainPart, StyledLossPart } from './styles'
import { Icons } from '../../../shared/GlobalStyle'
interface gainLossDataPanelProps {
  gainLoss: string
  gainLossPct: string
  isLoss: boolean
}

export const GainLossDataPanel = ({
  gainLoss,
  gainLossPct,
  isLoss,
}: gainLossDataPanelProps) => {
  return (
    <RootContainer>
      <h2>
        {isLoss ? (
          <StyledGainPart>- {gainLoss}</StyledGainPart>
        ) : (
          <StyledLossPart>+ {gainLoss}</StyledLossPart>
        )}
      </h2>
      {isLoss ? (
        <img src={Icons.Decrease} alt="Increase" />
      ) : (
        <img src={Icons.Grow} alt="Increase" />
      )}
      <p>
        {isLoss ? (
          <StyledGainPart>- {gainLossPct}</StyledGainPart>
        ) : (
          <StyledLossPart>+ {gainLossPct}</StyledLossPart>
        )}
      </p>
    </RootContainer>
  )
}
